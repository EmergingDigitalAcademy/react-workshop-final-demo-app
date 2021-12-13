import { combineReducers } from "redux";
import beers from "./beers";
import drinking from './drinking';
import loading from './loading';

const rootReducer = combineReducers({
  beers,
  drinking,
  loading,
});

export default rootReducer;
