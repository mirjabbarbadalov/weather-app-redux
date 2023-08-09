// FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

import thunkMiddleware from "redux-thunk";

const env = "developement";
const composeEnhancers =
  env === "developement"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
