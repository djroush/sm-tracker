import { takeLatest, select, put } from 'redux-saga/effects';
import { BossState } from '../redux/state/BossesState';
import { RootState } from '../redux/state/RootState';

function* toggleBoss(action: any, state: RootState) {
    const {bosses, areas} = state
    const { data } = action
    const { id:bossId, state:dataState } = data
    const updatedBoss = bosses[bossId]

    //Only allow state to be toggled if boss has been found somewhere
    const bossFoundArea = areas.find(area => area.bossId === bossId)
    if (bossFoundArea) {
        const updatedBossState: BossState = {...updatedBoss, state: 1 - dataState}
        yield put({type:'BOSSES/persist-boss', event:updatedBossState});    
    }
}

export function* workerClickToggleBoss(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield toggleBoss(action, state);
}

export default function* watchClickToggleBoss() {
    yield takeLatest('BOSSES/toggle-boss', workerClickToggleBoss);
}