import { takeLatest, select, put } from 'redux-saga/effects';
import { AreaState } from '../redux/state/AreasState';
import { RootState } from '../redux/state/RootState';

function* updateAreaBoss(action: any, state: RootState) {
    const {areas} = state
    
    const updatedBossId = Number(action.event.dragId)
    const updatedAreaId = Number(action.event.dropAreaId)

    if (Number.isNaN(updatedAreaId)) {
        return
    }
    const updatedArea = areas[updatedAreaId]
    if (updatedArea.bossId !== undefined) {
        const updatedAreaState: AreaState = {...updatedArea, bossId: updatedBossId}
        yield put({type:'AREAS/persist-area', event:updatedAreaState});    
    }
}

export function* workerDragBosses(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updateAreaBoss(action, state);
}

export default function* watchDragBosses() {
    yield takeLatest('BOSS/update-boss', workerDragBosses);
    
}