import React from "react";
import { connect } from "react-redux";
import SettingsForm from "../components/settingsForm/SettingsForm";
import { changeGameSettings } from "../actions/game";
import setUserName from "../actions/user";

const SettingsFormContainer = props => <SettingsForm {...props} />;
function mapDispatchToProps(dispatch) {
  return {
    changeSettings: (size, complexity) =>
      dispatch(changeGameSettings(size, complexity)),
    changeName: name => dispatch(setUserName(name))
  };
}

const mapStateToProps = state => ({
  size: state.game.size,
  complexity: state.game.complexity,
  name: state.user.name
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsFormContainer);
