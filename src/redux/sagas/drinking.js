import { delay, put, select } from 'redux-saga/effects';

import { REMOVE_BEER } from '../constants/beers';
import { END_DRINKING } from '../constants/drinking';

function* startDrinking() {
   // reach into redux and grab the list of beers from the store
  const beers = yield select(state => state.beers);
  console.log(beers);
  const totalNumberOfBeers = beers.length;
  const randomNumber = Math.random() * totalNumberOfBeers;
  const randomBeerIndex = Math.floor(randomNumber);

  const beer = beers[randomBeerIndex];
  yield put({ type: REMOVE_BEER, payload: beer.id });

  // Delay and do stuff
  yield delay(2000);
  yield put({ type: END_DRINKING });
}

export default startDrinking;
