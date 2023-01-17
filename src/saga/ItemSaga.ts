import { takeLatest, select, put, all } from 'redux-saga/effects';
import { AreaState, UNKNOWN } from '../redux/state/AreasState';
import { RootState } from '../redux/state/RootState';

function* updateItems(event: any, state: RootState) {
    const {areas, items} = state
    const updatedItemId = Number(event.value.dragId)
    const updatedAreaId = Number(event.value.dropAreaId)
    const updatedArea = areas[updatedAreaId]
    const updatedAreaState: AreaState = {...updatedArea, itemIds: [...updatedArea.itemIds]}
    const updatedItem = {...items[updatedItemId]}
    const oldAreaId = updatedItem.areaId

    //Remove item from old area
    if ( oldAreaId !== UNKNOWN) {
        const oldArea = {...areas[oldAreaId]}
        const oldAreaState: AreaState = {...oldArea, itemIds: [...oldArea.itemIds]}

        //TODO: when removing items, need to replace removed item with unknown item
        //TODO: need to add itemCount for areaState?

        const oldItemIds = oldAreaState.itemIds
        const matchingIndex = oldItemIds.findIndex(itemId => itemId === updatedItem.id)
        if (matchingIndex > -1) {
            oldItemIds.splice(matchingIndex, 1)
            oldItemIds[matchingIndex] = 0
            yield put ({type: 'AREAS/persist-area', value: oldAreaState})
        }
    }
    //Add item to new area
    updatedAreaState.itemIds.push(updatedItem.id)
    updatedItem.areaId = updatedAreaId
    yield all([
        put({type:'AREAS/persist-area', value:updatedAreaState}),
        put({type: 'ITEMS/persist-item', value:updatedItem})
    ]);
}

export function* workerItems(event: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updateItems(event, state);
}

export default function* watchItems() {
    yield takeLatest('AREA/update-item', workerItems);
    
}