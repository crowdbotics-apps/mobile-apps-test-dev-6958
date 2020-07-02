import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth47576Saga from '../features/EmailAuth47576/redux/sagas';
import EmailAuth57575Saga from '../features/EmailAuth57575/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth47576Saga,
EmailAuth57575Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}