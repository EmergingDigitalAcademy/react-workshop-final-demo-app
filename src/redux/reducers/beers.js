const defaultState = [];

function beersReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_BEERS':
      return action.payload;
    case 'ADD_BEERS':
      return [...state, ...action.payload]
    default:
      return state;
  }
}

export default beersReducer;
