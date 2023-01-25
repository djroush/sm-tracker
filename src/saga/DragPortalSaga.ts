import { takeLatest, select, put, all, PutEffect } from 'redux-saga/effects';
import Areas from '../components/Areas';
import { PortalState } from '../redux/state/PortalState';
import { RootState } from '../redux/state/RootState';

function* updatePortal(action: any, state: RootState) {
    const updatedPortalActions: PutEffect[] = []
    const { portals, areas } = state
    const entrancePortalId = Number(action.event.dropId)
    const entranceAreaId = Number(action.event.dropAreaId)
    const exitPortalId = Number(action.event.dragId)
    const exitAreaId = Number(action.event.dragAreaId)
    if (Number.isNaN(exitAreaId) || entrancePortalId === exitPortalId) {
        return
    }
    const entrancePortal: PortalState = portals[entrancePortalId]
    const exitPortal: PortalState = portals[exitPortalId]
    const entranceColor = areas[entranceAreaId].bgColor
    const exitColor = areas[exitAreaId].bgColor
    const { entrance: exitEntrance } = exitPortal
    const { entrance: entranceEntrance } = entrancePortal
    const updatedExitPortal: PortalState = {
        ...exitPortal,
        exit: entranceEntrance, exitId: entrancePortalId, exitAreaId: entranceAreaId, exitColor: entranceColor
    }
    const updatedEntrancePortal: PortalState = {
        ...entrancePortal,
        exit: exitEntrance, exitId: exitPortalId, exitAreaId, exitColor: exitColor
    }

    const entryIndex = updatedEntrancePortal.id
    let validPortals = [...portals]
    validPortals[entryIndex] = updatedEntrancePortal
    validPortals[updatedExitPortal.id] = updatedExitPortal

    const validEntryPortals = validPortals.filter(portal => portal.areaId === entranceAreaId)
    const validExitPortals = validPortals.filter(portal => portal.areaId === entranceAreaId)

    const portalsToCheck = [...validEntryPortals, ...validExitPortals]


    //Basic implementation which can only detect disjoint graph within the entrance/exit areas.
    // if (isObviousDisjointGraph(entrancePortalId, validPortals)) {
    //     return;
    // }
    //TODO: need to detached linked portals before proceeding
    const detachedExitPortalIndex = portals.findIndex(portal => portal.exit === exitEntrance)
    if (detachedExitPortalIndex >= 0) {
        const detachedPortal = {
            ...portals[detachedExitPortalIndex],
            exit: null, exitId: 0, exitAreaId: 0, exitColor: null
        }
        validPortals[detachedExitPortalIndex] = detachedPortal
        updatedPortalActions.push(put({ type: 'PORTALS/persist-portal', event: detachedPortal }))
    }
    const detachedEntrancePortalIndex = portals.findIndex(portal => portal.exit === entranceEntrance)
    if (detachedEntrancePortalIndex >= 0) {
        const detachedPortal = {
            ...portals[detachedEntrancePortalIndex],
            exit: null, exitId: 0, exitAreaId: 0, exitColor: null
        }
        validPortals[detachedExitPortalIndex] = detachedPortal
        updatedPortalActions.push(put({ type: 'PORTALS/persist-portal', event: detachedPortal }))
    }

    const isNotDisjoint = portalsToCheck.every(portal => {
        return !(isObviousDisjoint(portal.id, validPortals))
    })
    if (!isNotDisjoint) {
        return;
    }
    const isSecondaryDisjointEntrance = isSecondaryDisjointGraph(entrancePortalId, validPortals)
    const isSecondaryDisjointExit = isSecondaryDisjointGraph(exitPortalId, validPortals)

    if (isSecondaryDisjointEntrance || isSecondaryDisjointExit) {
        return;
    }
    updatedPortalActions.push(put({ type: 'PORTALS/persist-portal', event: updatedExitPortal }))
    updatedPortalActions.push(put({ type: 'PORTALS/persist-portal', event: updatedEntrancePortal }))

    yield all(updatedPortalActions)
}

const isObviousDisjoint = (entrancePortalId: number, portals: PortalState[]) => {
    const entrancePortal = portals[entrancePortalId]
    const { areaId, exitAreaId } = entrancePortal

    let attachedAreas = Array.from(new Set([areaId, exitAreaId]))
    const entryAreaPortals = portals.filter(portal => portal.areaId === areaId)
    const exitAreaPortals = portals.filter(portal => portal.areaId === exitAreaId)
    const entranceAreaPortalCount = entryAreaPortals.length
    const exitAreaPortalCount = exitAreaPortals.length
    const openEntryPortalsCount = entryAreaPortals.filter(portal => portal.exitId === 0).length
    const openExitPortalsCount = exitAreaPortals.filter(portal => portal.exitId === 0).length
    const outwardEntryPortalsCount = entryAreaPortals.filter(portal => portal.exitId !== 0 && !attachedAreas.includes(portal.exitAreaId)).length
    const outwardExitPortalsCount = exitAreaPortals.filter(portal => portal.exitId !== 0 && !attachedAreas.includes(portal.exitAreaId)).length

    //Don't allow entrances to link via portal which will cause a disjoint graph
    if ((areaId === exitAreaId && entranceAreaPortalCount <= 2) ||
        entranceAreaPortalCount + exitAreaPortalCount <= 2) {
        return true;
    }
    const isClosed = ((openEntryPortalsCount + openExitPortalsCount) === 0 &&
        (outwardEntryPortalsCount + outwardExitPortalsCount) === 0)
    if (isClosed) {
        return true;
    }

    return false;
}

const isSecondaryDisjointGraph = (entrancePortalId: number, portals: PortalState[]) => {
    const entrancePortal = portals[entrancePortalId]
    const {areaId, exitAreaId } = entrancePortal
    const entranceAreaPortals = portals.filter(portal => portal.areaId === areaId)
    const exitAreaPortals = portals.filter(portal => portal.areaId === exitAreaId)
    const hasDetachedEntrancePortal = entranceAreaPortals.find(portal => portal.exitId === 0) !== undefined
    const hasDetachedExitPortal = exitAreaPortals.find(portal => portal.exitId === 0) !== undefined
    if (hasDetachedEntrancePortal || hasDetachedExitPortal) {
        return false;
    }

    const allConnectedAreaPortals = exitAreaPortals
        .map(portal => {
            const exitAreaId = portals[portal.exitId].areaId
            const exitAreaPortals = portals
                .filter(portal => portal.areaId !== portal.exitAreaId)
                .filter(portal => portal.areaId === exitAreaId)
                .map(portal => portal.id)
            return exitAreaPortals
        })
        .reduce((total, current) => total.concat(current))
    const connectedAreaPortals = Array.from(new Set(allConnectedAreaPortals))
    const entrancePortalCount = connectedAreaPortals.filter(portalId => portals[portalId].areaId === exitAreaId).length
    const exitPortalCount = connectedAreaPortals.filter(portalId => portals[portalId].areaId !== exitAreaId).length

    if (connectedAreaPortals.length === exitAreaPortals.length || entrancePortalCount === exitPortalCount) {
        return true;
    }
    return false;
}

export function* workerDragPortals(action: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updatePortal(action, state);
}

export default function* watchDragPortals() {
    yield takeLatest('PORTAL/update-portals', workerDragPortals);

}