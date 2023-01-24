import { takeLatest, select, put } from 'redux-saga/effects';
import { ItemCountState } from '../redux/state/ItemCountState';
import { RootState } from '../redux/state/RootState';

function* deriveItemCounts(state: RootState) {
    const { items, areas, itemCount} = state
    const validAreas = areas.filter(area => area.id !== 0)
    const validItems = items.filter(item => item.id !== 0)
    const areaItemIds: number[] = validAreas.map(area => area.itemIds).flatMap(a => a)
    const located: number = areaItemIds.filter(itemId => itemId === 0).length
    const unknown = validItems.filter(item => item.areaId === 0).length - located
    const seen = validItems.filter(item => item.areaId !== 0 && item.state === 0).length
    const found = validItems.filter(item => item.areaId !== 0 && item.state === 1).length

    const itemCountState: ItemCountState = { found, seen, located, unknown }

    const isChanged = itemCount.found !== found || 
        itemCount.located !== located || 
        itemCount.seen !== seen || 
        itemCount.unknown !== unknown

    if (isChanged) {
        yield put({ type: 'ITEMCOUNT/persist-itemCount', event: itemCountState});
    }
}

export function* workerDeriveItemCounts() {
    const state: RootState = yield select((state: RootState) => state)
    yield deriveItemCounts(state);
}

export default function* watchDeriveItemCount() {
    yield takeLatest('ITEMCOUNT/derive-itemCount', workerDeriveItemCounts);

}