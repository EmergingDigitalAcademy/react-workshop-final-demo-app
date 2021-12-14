import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Add access to redux devtools AND saga middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ),
);

// boot up saga background worker to listen for actions
sagaMiddleware.run(rootSaga);

export default store;
