import { takeEvery, takeLeading, takeLatest } from "redux-saga/effects";
import { getBeers } from "./beers";

import {
  FETCH_BEERS
} from '../constants/beers';
import { START_DRINKING } from "../constants/drinking";
import startDrinking from "./drinking";

// takeEvery: Queue and run the sagas concurrently
// takeLatest: Cancel any existing sagas running, run again
// takeLeading: If a saga is already running, ignore the action
function* rootSaga() {
  yield takeLatest(START_DRINKING, startDrinking);
  // yield takeLeading(START_DRINKING, startDrinking);

  yield takeEvery(FETCH_BEERS, getBeers);
}

export default rootSaga;
