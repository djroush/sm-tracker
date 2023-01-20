import { takeLatest, select, put } from 'redux-saga/effects';
import { ItemState } from '../redux/state/ItemsState';
import { RootState } from '../redux/state/RootState';

function* toggleItem(action: any, state: RootState) {
    const { items } = state
    const { data } = action
    const { id, state: dataState } = data
    const updatedItem = items[id]
    const updatedItemState: ItemState = { ...updatedItem, state: 1 - dataState }
    yield put({ type: 'ITEMS/persist-item', event: updatedItemState });
}

export function* workerToggleItem(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield toggleItem(action, state);
}

export default function* watchToggleItem() {
    yield takeLatest('ITEMS/toggle-item', workerToggleItem);
}