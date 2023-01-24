import { takeLatest, select, put, all } from 'redux-saga/effects';
import { AreaState, UNKNOWN } from '../redux/state/AreasState';
import { RootState } from '../redux/state/RootState';

function* updateItems(action: any, state: RootState) {
    const {areas, items, itemCount} = state
    const {unknown} = itemCount
    const updatedItemId = Number(action.event.dragId)
    const updatedAreaId = Number(action.event.dropAreaId)
    if (Number.isNaN(updatedAreaId)) {
        return
    }
    const updatedArea = areas[updatedAreaId]

    //17 = 0 items in area
    if (updatedArea.itemIds.includes(17)) {
        return
    }
    const updatedAreaState: AreaState = {...updatedArea, itemIds: [...updatedArea.itemIds]}
    const updatedItem = {...items[updatedItemId]}
    const oldAreaId = updatedItem.areaId

    //Check for space before inserting item
    const {maxItems, itemIds} = updatedArea
    const currentItems = itemIds.filter(item=> item !== 0).length
    const canInsert = (unknown > 0 || itemIds.includes(0)) 
    if (currentItems>=maxItems || !canInsert) {
        return;
    }

    //Do nothing if item already exists
    const existingIndex = updatedAreaState.itemIds.findIndex(itemId => itemId === updatedItemId)
    if (existingIndex >= 0) {
        return
    }
    //Remove item from old area
    if ( oldAreaId !== UNKNOWN) {
        const oldArea = {...areas[oldAreaId]}
        const oldAreaState: AreaState = {...oldArea, itemIds: [...oldArea.itemIds]}

        let oldItemIds = oldAreaState.itemIds
        const matchingIndex = oldItemIds.findIndex(itemId => itemId === updatedItem.id)
        if (matchingIndex > -1) {
            oldItemIds[matchingIndex] = 0
            const removedItemId = oldItemIds.splice(matchingIndex, 1)
            const itemIds = oldItemIds.concat(removedItemId)
            yield put ({type: 'AREAS/persist-area', event: {...oldAreaState, itemIds}})
        }
    }

    const insertIndex = itemIds.findIndex(itemId => itemId === UNKNOWN)
    if (insertIndex >= 0) {
        updatedAreaState.itemIds[insertIndex] = updatedItem.id
    } else {
        updatedAreaState.itemIds.push(updatedItem.id)
    }
    updatedItem.areaId = updatedAreaId
    updatedItem.state = 1

    yield all([
        put({type:'AREAS/persist-area', event:updatedAreaState}),
        put({type: 'ITEMS/persist-item', event:updatedItem})
    ]);
}

export function* workerDragItems(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updateItems(action, state);
}

export default function* watchDragItems() {
    yield takeLatest('ITEMS/update-item', workerDragItems);
    
}