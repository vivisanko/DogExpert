import React, { Component } from "react";
import "./Settings.css";
import SettingsFormContainer from "../../containers/SettingsFormContainer";

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <SettingsFormContainer />
      </div>
    );
  }
}

export default Settings;
