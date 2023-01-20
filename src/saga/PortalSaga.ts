import { takeLatest, select, put } from 'redux-saga/effects';
import { PortalState } from '../redux/state/PortalState';
import { RootState } from '../redux/state/RootState';

function* updatePortal(action: any, state: RootState) {
    const {portals, areas} = state
    const entrancePortalId = Number(action.event.dropId)
    const entranceAreaId = Number(action.event.dropAreaId)
    const exitPortalId = Number(action.event.dragId)
    const exitAreaId = Number(action.event.dragAreaId)
    if (Number.isNaN(exitAreaId)) {
        return
    }
    const entrancePortal: PortalState = portals[entrancePortalId]
    const exitPortal: PortalState = portals[exitPortalId]
    const entranceColor = areas[entranceAreaId].bgColor
    const exitColor = areas[exitAreaId].bgColor
    const { entrance: exitEntrance} = exitPortal
    const { entrance: entranceEntrance } = entrancePortal
    const entranceAreaPortals = portals.filter(portal => portal.areaId === entranceAreaId)
    const exitAreaPortals = portals.filter(portal => portal.areaId === exitAreaId)
    const entranceAreaPortalCount = entranceAreaPortals.length
    const exitAreaPortalCount = exitAreaPortals.length

    //Don't allow entrances to link via portal which will cause a disjoint graph
    if ((entranceAreaId === exitAreaId && entranceAreaPortalCount <= 2) || 
        entrancePortalId === exitPortalId ||
        entranceAreaPortalCount + exitAreaPortalCount <= 2) {
        return;
    }
    //TODO: need to detached linked portals before proceeding
    const detachedExitPortalIndex = portals.findIndex(portal => portal.exit === exitEntrance)
    if (detachedExitPortalIndex >= 0) {
        const detachedPortal = {...portals[detachedExitPortalIndex], exit: null, exitColor: null}
        yield put({type:'PORTALS/persist-portal', event:detachedPortal}); 
    }
    const detachedEntrancePortalIndex = portals.findIndex(portal => portal.exit === entranceEntrance)
    if (detachedEntrancePortalIndex >= 0) {
        const detachedPortal = {...portals[detachedEntrancePortalIndex], exit: null, exitColor: null}
        yield put({type:'PORTALS/persist-portal', event:detachedPortal}); 
    }


    const updatedExitPortal: PortalState = {...exitPortal, exit: entranceEntrance, exitColor: entranceColor}
    const updatedEntrancePortal: PortalState = {...entrancePortal, exit: exitEntrance, exitColor: exitColor}

    yield put({type:'PORTALS/persist-portal', event:updatedExitPortal});
    yield put({type:'PORTALS/persist-portal', event:updatedEntrancePortal});
}

export function* workerPortals(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updatePortal(action, state);
}

export default function* watchPortals() {
    yield takeLatest('PORTAL/update-portals', workerPortals);
    
}