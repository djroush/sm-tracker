import { spawn } from 'redux-saga/effects'
import watchBosses from './BossSaga';
import watchDeleteBoss from './DeleteBossSaga';
import watchDetachPortal from './DetachPortalSaga';
import watchItemCounts from './ItemCountSaga';
import watchItems from './ItemSaga';
import watchPortals from './PortalSaga';
import watchToggleBoss from './ToggleBossSaga';
import watchToggleItem from './ToggleItemSaga';

export default function* rootSaga() {
    yield spawn(watchPortals);
    yield spawn(watchBosses);
    yield spawn(watchItems);
    yield spawn(watchItemCounts);

    yield spawn(watchToggleBoss);
    yield spawn(watchToggleItem);
    yield spawn(watchDetachPortal);
    yield spawn(watchDeleteBoss);
}

