import { takeEvery } from "redux-saga/effects";
import { getBeers } from "./beers";

import {
  FETCH_BEERS
} from '../constants/beers';

function* rootSaga() {
  yield takeEvery(FETCH_BEERS, getBeers);
}

export default rootSaga;
