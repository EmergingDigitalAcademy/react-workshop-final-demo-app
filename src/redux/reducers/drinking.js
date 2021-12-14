import {
  START_DRINKING,
  END_DRINKING,
} from '../constants/drinking'

const defaultState = false;

function drinkingReducer(state = defaultState, action) {
  switch (action.type) {
    case START_DRINKING:
      return true;
    case END_DRINKING:
      return false
    default:
      return state;
  }
}

export default drinkingReducer;
