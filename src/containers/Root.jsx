import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchDogs } from "../actions/dogs";

import App from "../App";

const Root = ({ store }) => {
  store.dispatch(
    fetchDogs({
      source: "list",
      exactly: "",
      amount: null
    })
  );
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.shape({
    dogs: PropTypes.any,
    game: PropTypes.any,
    user: PropTypes.any
  }).isRequired
};

export default Root;
