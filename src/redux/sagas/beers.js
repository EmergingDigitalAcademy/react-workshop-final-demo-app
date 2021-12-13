import axios from 'axios';
import { call, put } from 'redux-saga/effects';

// example of using an external function call from
// a generator, which needs to either return a promise
// OR use the `call` wrapper
function getCeiling(decimal) {
  return Math.ceil(decimal);
}

function* getBeers() {
  try {
    yield put({ type: 'START_LOADING' });
    const response = yield axios.get('https://rotatoripa.co/api/beers?per_page=10&page=1');
    yield put({ type: 'SET_BEERS', payload: response.data });
    yield put({ type: 'END_LOADING' });

    const total = Number(response.headers.total);
    const perPage = Number(response.headers['per-page']);

    // use `call` to wrap a non-promise function in a promise
    // (generators need promise-based function calls)
    const pages = yield call(getCeiling, total / perPage);

    for (let page = 2; page <= pages; page++) {
      const nextResponse = yield axios.get(`https://rotatoripa.co/api/beers?per_page=10&page=${page}`);
      yield put({ type: 'ADD_BEERS', payload: nextResponse.data });
    }
  } catch (error) {
    console.error(error);
  }
}

export {
  getBeers,
};
