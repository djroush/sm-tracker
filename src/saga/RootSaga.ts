import { spawn } from 'redux-saga/effects'
import watchBosses from './BossSaga';
import watchItemCounts from './ItemCountSaga';
import watchItems from './ItemSaga';
import watchPortals from './PortalSaga';

export default function* rootSaga() {
    yield spawn(watchPortals);
    yield spawn(watchBosses);
    yield spawn(watchItems);
    yield spawn(watchItemCounts);
}

