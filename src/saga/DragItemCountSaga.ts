import { takeLatest, select, put, all } from 'redux-saga/effects';
import { AreaState } from '../redux/state/AreasState';
import { RootState } from '../redux/state/RootState';

function* updateItemCounts(action: any, state: RootState) {
    const { areas, items, itemCount} = state
    const dragItemCount = Number(action.event.dragValue)
    const updatedAreaId = Number(action.event.dropAreaId)
    const unknownItems = itemCount.unknown

    if (Number.isNaN(updatedAreaId)) {
        return
    }
    const updatedArea = areas[updatedAreaId]
    const updatedAreaState: AreaState = { ...updatedArea, itemIds: [...updatedArea.itemIds] }
    if (dragItemCount > 0 && updatedArea.itemIds.includes(17)) {
        updatedAreaState.itemIds = []
    }

    const { itemIds: currentItemIds } = updatedAreaState
    const currentItemCount = currentItemIds.length
    if (currentItemCount === dragItemCount && dragItemCount > 0) {
        return
    }

    const maxAddCount = updatedArea.maxItems - currentItemCount
    const maxDragCount = dragItemCount - currentItemCount
    const missingItemCount = Math.min(maxDragCount, maxAddCount, unknownItems)

    //If fewer items remove items
    if (missingItemCount < 0) {
        const removeItemCount = Math.abs(missingItemCount)
        const removeIndex = currentItemCount - removeItemCount
        const removedItemdIds = currentItemIds.splice(removeIndex, removeItemCount)
        const removedItemActions = items
            .filter(item => removedItemdIds.includes(item.id))
            .map(item => { return { ...item, state: 0, areaId: 0 } })
            .map(item => put({ type: 'ITEMS/persist-item', event: item }))

        yield all([...removedItemActions])

        if (dragItemCount === 0) {
            updatedAreaState.itemIds = [17]
        }
        //If less items, add more
    } else if (missingItemCount > 0) {
        const missingItems: number[] = [...Array(missingItemCount)].map(x => 0)
        updatedAreaState.itemIds.push(...missingItems)
    } else if (dragItemCount === 0) {
        updatedAreaState.itemIds = [17]
    }
    yield put({ type: 'AREAS/persist-area', event: updatedAreaState })
}

export function* workerDragItemCounts(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updateItemCounts(action, state);
}

export default function* watchDragItemCounts() {
    yield takeLatest('ITEMCOUNT/update-itemCount', workerDragItemCounts);

}