import { takeLatest, select, put } from 'redux-saga/effects';
import { BossState } from '../redux/state/BossesState';
import { RootState } from '../redux/state/RootState';

function* toggleBoss(action: any, state: RootState) {
    const {bosses} = state
    const { data } = action
    const { id, state:dataState } = data
    const updatedBoss = bosses[id]
    const updatedBossState: BossState = {...updatedBoss, state: 1 - dataState}
    yield put({type:'BOSSES/persist-boss', event:updatedBossState});    
}

export function* workerToggleBoss(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield toggleBoss(action, state);
}

export default function* watchToggleBoss() {
    yield takeLatest('BOSSES/toggle-boss', workerToggleBoss);
}