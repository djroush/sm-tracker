import { takeLatest, select, put, all } from 'redux-saga/effects';
import { AreaState } from '../redux/state/AreasState';
import { BossState } from '../redux/state/BossesState';
import { RootState } from '../redux/state/RootState';

function* deleteBoss(action: any, state: RootState) {
    const {areas, bosses} = state
    const { event } = action
    const { dropAreaId } = event
    if (dropAreaId === undefined) {
        return
    }
    const area = areas[dropAreaId]
    if (area.bossId === undefined) {
        return
    }
    const boss = bosses[area.bossId]
    const updatedAreaState: AreaState = {...area, bossId: 0}
    const updatedBossState: BossState = {...boss, state: 1}
    yield all([
        put({type:'AREAS/persist-area', event:updatedAreaState}),
        put({type:'BOSSES/persist-boss', event:updatedBossState})
    ]);
}

export function* workerDeleteBoss(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield deleteBoss(action, state);
}

export default function* watchDeleteBoss() {
    yield takeLatest('BOSS/delete-boss', workerDeleteBoss);
}