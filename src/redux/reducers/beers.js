import {
  SET_BEERS,
  ADD_BEERS,
  REMOVE_BEER
} from '../constants/beers';

const defaultState = [];

function beersReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BEERS:
      return action.payload;
    case ADD_BEERS:
      return [...state, ...action.payload]
    // We receive a payload like { type: REMOVE_BEER, payload: 7 }
    case REMOVE_BEER: {
      const beerIndex = state.findIndex(beer => beer.id === action.payload)
      return [
        ...state.slice(0, beerIndex),
        ...state.slice(beerIndex + 1),
      ]
    }
    default:
      return state;
  }
}

export default beersReducer;
