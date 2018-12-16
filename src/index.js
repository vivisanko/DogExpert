import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import allReducers from "./reducers";
import "./index.css";
import Root from "./containers/Root";

const store = createStore(allReducers, applyMiddleware(thunk, logger));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

export default store;
