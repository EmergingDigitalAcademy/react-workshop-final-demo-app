const defaultState = true;

function loadingReducer(state = defaultState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return true;
    case 'END_LOADING':
      return false
    default:
      return state;
  }
}

export default loadingReducer;
