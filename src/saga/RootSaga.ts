import { spawn } from 'redux-saga/effects'
import watchDragBosses from './DragBossSaga';
import watchDragDeleteBoss from './DragDeleteBossSaga';
import watchClickDetachPortal from './ClickDetachPortalSaga';
import watchDragItemCounts from './DragItemCountSaga';
import watchDragItems from './DragItemSaga';
import watchDragPortals from './DragPortalSaga';
import watchClickToggleBoss from './ClickToggleBossSaga';
import watchClickToggleItem from './ClickToggleItemSaga';
import watchDeriveItemCount from './DeriveItemCountSaga';

export default function* rootSaga() {
    yield spawn(watchDragPortals);
    yield spawn(watchDragBosses);
    yield spawn(watchDragItems);
    yield spawn(watchDragItemCounts);
    yield spawn(watchDragDeleteBoss);

    yield spawn(watchDeriveItemCount);

    yield spawn(watchClickToggleBoss);
    yield spawn(watchClickToggleItem);
    yield spawn(watchClickDetachPortal);   
}

