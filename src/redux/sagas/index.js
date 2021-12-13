import { takeEvery } from "redux-saga/effects";
import { getBeers } from "./beers";

function* rootSaga() {
  yield takeEvery('FETCH_BEERS', getBeers);
}

export default rootSaga;
