import { takeLatest, select, put } from 'redux-saga/effects';
import { PortalState } from '../redux/state/PortalState';
import { RootState } from '../redux/state/RootState';

function* updatePortal(event: any, state: RootState) {
    const {portals} = state
    const entrancePortalId = Number(event.value.dropId)
    const entranceAreaId = Number(event.value.dropAreaId)
    const exitPortalId = Number(event.value.dragId)
    const exitAreaId = Number(event.value.dragAreaId)
    const entrancePortal: PortalState = portals[entrancePortalId]
    const exitPortal: PortalState = portals[exitPortalId]
    const { entrance: exitEntrance, entranceColor: exitColor } = exitPortal
    const { entrance: entranceEntrance,  entranceColor } = entrancePortal

    const areaPortals = portals.filter(portal => portal.areaId === entranceAreaId)

    if (entranceAreaId === exitAreaId && areaPortals.length <= 2) {
        return;
    }
    //TODO: need to detached linked portals before proceeding


    const updatedExitPortal: PortalState = {...exitPortal, exit: entranceEntrance, exitColor: entranceColor}
    const updatedEntrancePortal: PortalState = {...entrancePortal, exit: exitEntrance, exitColor: exitColor}

    yield put({type:'PORTALS/persist-portal', value:updatedExitPortal});
    yield put({type:'PORTALS/persist-portal', value:updatedEntrancePortal});
}

export function* workerPortals(event: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updatePortal(event, state);
}

export default function* watchPortals() {
    yield takeLatest('PORTAL/update-portals', workerPortals);
    
}