import { takeLatest, select, put } from 'redux-saga/effects';
import { AreaState } from '../redux/state/AreasState';
import { RootState } from '../redux/state/RootState';

function* updateAreaBoss(event: any, state: RootState) {
    const {areas} = state
    const updatedBossId = Number(event.value.dragId)
    const updatedAreaId = Number(event.value.dropAreaId)
    const updatedArea = areas[updatedAreaId]
    const updatedAreaState: AreaState = {...updatedArea, bossId: updatedBossId}

    yield put({type:'AREAS/persist-area', value:updatedAreaState});
}

export function* workerBosses(event: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updateAreaBoss(event, state);
}

export default function* watchBosses() {
    yield takeLatest('AREA/update-boss', workerBosses);
    
}