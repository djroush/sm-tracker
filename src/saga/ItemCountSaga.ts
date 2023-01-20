import { takeLatest, select, put, all } from 'redux-saga/effects';
import { AreaState } from '../redux/state/AreasState';
import { RootState } from '../redux/state/RootState';

function* updateItemCounts(action: any, state: RootState) {
    const {areas, items} = state
    const itemCount = Number(action.event.dragValue)
    const updatedAreaId = Number(action.event.dropAreaId)

    if (Number.isNaN(updatedAreaId)) {
        return
    }
    const updatedArea = areas[updatedAreaId]
    const updatedAreaState: AreaState = {...updatedArea, itemIds: [...updatedArea.itemIds]}
    const {itemIds: currentItemIds} = updatedAreaState
    const updatedItemCount = Math.min(itemCount, updatedArea.maxItems)
    const currentItemCount = currentItemIds.length
    const missingItemCount =  updatedItemCount - currentItemCount

    if (missingItemCount < 0) {
        const removeItemCount = Math.abs(missingItemCount)
        const removeIndex = currentItemCount-removeItemCount
        const removedItemdIds = currentItemIds.splice(removeIndex, removeItemCount)
        const removedItemActions = items
            .filter(item => removedItemdIds.includes(item.id))
            .map( item => { return {...item, state: 0} } )
            .map(item => put({type: 'ITEMS/persist-item', event: item}))

            yield all([...removedItemActions])

            yield put({type:'AREAS/persist-area', event:updatedAreaState});
            yield put({type:'AREAS/persist-area', event:updatedAreaState});
    } else if (missingItemCount > 0) {
        const missingItems: number[] = [...Array(missingItemCount)].map(x => 0)
        updatedAreaState.itemIds.push(...missingItems)
        yield put({type:'AREAS/persist-area', event:updatedAreaState});
    }
}

export function* workerItemCounts(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updateItemCounts(action, state);
}

export default function* watchItemCounts() {
    yield takeLatest('ITEMCOUNT/update-itemCount', workerItemCounts);
    
}