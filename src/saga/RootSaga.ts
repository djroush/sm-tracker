import { spawn } from 'redux-saga/effects'
import watchArea from './AreaSaga';

export default function* rootSaga() {
    yield spawn(watchArea);
}

