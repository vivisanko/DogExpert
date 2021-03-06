import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "../App";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router basename="/DogExpert">
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    dogs: PropTypes.any,
    game: PropTypes.any,
    user: PropTypes.any
  }).isRequired
};

export default Root;
