import { takeLatest, select } from 'redux-saga/effects';
import { RootState } from '../redux/state/RootState';


function* updateAreas(event: any, state: RootState) {
    const {areas, items, bosses} = state
    const {
        dragId, dragAreaId, dragType, dragValue, dropId, dropAreaId, dropType, dropValue
    } = event.value

    //FIXME: change state to use arrays to make looking stuff up easier
    if (dragType === "itemCount") {
        let area = null
        if (dropType === "portal") {
            // area = 
        } else if (dropType === "area") {

        }
    }


}

export function* workerAreas(event: any) {
    const state: RootState = yield select((state: RootState) => state)
    yield updateAreas(event, state);
}

export default function* watchArea() {
    yield takeLatest('AREA/update-tracker', workerAreas);
    
}