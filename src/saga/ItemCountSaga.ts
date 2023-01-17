import { takeLatest, select, put } from 'redux-saga/effects';
import { AreaState } from '../redux/state/AreasState';
import { RootState } from '../redux/state/RootState';

function* updateItemCounts(event: any, state: RootState) {
    const {areas} = state
    const itemCount = Number(event.value.dragValue)
    const updatedAreaId = Number(event.value.dropAreaId)
    const updatedArea = areas[updatedAreaId]
    const updatedAreaState: AreaState = {...updatedArea, itemIds: [...updatedArea.itemIds]}
    const {itemIds: currentItemIds} = updatedAreaState
    const updatedItemCount = Math.min(itemCount, updatedArea.maxItems)
    const currentItemCount = currentItemIds.length
    const missingItemCount =  updatedItemCount - currentItemCount
    const missingItems: number[] = [...Array(missingItemCount)].map(x => 0)

    updatedAreaState.itemIds.push(...missingItems)

    yield put({type:'AREAS/persist-area', value:updatedAreaState});
}

export function* workerItemCounts(event: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updateItemCounts(event, state);
}

export default function* watchItemCounts() {
    yield takeLatest('AREA/update-itemCount', workerItemCounts);
    
}