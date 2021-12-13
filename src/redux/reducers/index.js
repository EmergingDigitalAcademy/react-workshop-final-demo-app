import { combineReducers } from "redux";
import beers from "./beers";

const rootReducer = combineReducers({
  beers,
});

export default rootReducer;
