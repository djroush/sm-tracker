import { takeLatest, select, put, all } from 'redux-saga/effects';
import { PortalState } from '../redux/state/PortalState';
import { RootState } from '../redux/state/RootState';

function* detachPortal(action: any, state: RootState) {
    const { portals } = state
    const { data } = action
    const { id } = data
    const portalEntrance: PortalState = portals[id]
    const {exit} = portalEntrance
    const portalExit = portals.find(portal => portal.entrance === exit)
    if (portalExit === undefined) {
        return;
    }
    const updatedPortalEntrance: PortalState = { ...portalEntrance, exit: null, exitColor: null }
    const updatedPortalExit: PortalState = { ...portalExit, exit: null, exitColor: null }
    yield all([
        put({ type: 'PORTALS/persist-portal', event: updatedPortalEntrance }),
        put({ type: 'PORTALS/persist-portal', event: updatedPortalExit })
    ]);
}

export function* workerClickDetachPortal(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield detachPortal(action, state);
}

export default function* watchClickDetachPortal() {
    yield takeLatest('PORTALS/detach-portal', workerClickDetachPortal);
}