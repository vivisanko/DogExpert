import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { fetchDogs } from "../actions/index";

import App from "../App";

class Root extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const query = {
      source: "list",
      exactly: "",
      amount: null
    };
    dispatch(fetchDogs(query));
  }

  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => ({
  list: state.dogs.list,
  loading: state.dogs.loading,
  error: state.dogs.error
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

Root.propTypes = {
  dispatch: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
