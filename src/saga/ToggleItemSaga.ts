import { takeLatest, select, put } from 'redux-saga/effects';
import { ItemState } from '../redux/state/ItemsState';
import { RootState } from '../redux/state/RootState';

function* toggleItem(action: any, state: RootState) {
    const { items, areas } = state
    const { data } = action
    const { id:itemId, state: dataState } = data
    const updatedItem = items[itemId]

    //Only allow state to be toggled if item has been found somewhere
    const itemFoundArea = areas.find(area => area.itemIds.includes(itemId))
    if (itemFoundArea) {
        const updatedItemState: ItemState = { ...updatedItem, state: 1 - dataState }
        yield put({ type: 'ITEMS/persist-item', event: updatedItemState });    
    }
}

export function* workerToggleItem(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield toggleItem(action, state);
}

export default function* watchToggleItem() {
    yield takeLatest('ITEMS/toggle-item', workerToggleItem);
}