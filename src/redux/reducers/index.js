import { combineReducers } from "redux";
import beers from "./beers";
import loading from './loading';

const rootReducer = combineReducers({
  beers,
  loading,
});

export default rootReducer;
