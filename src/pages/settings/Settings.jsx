import React, { Component } from "react";
import SettingsForm from "../../components/settingsForm/SettingsForm";
import "./Settings.css";

class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <SettingsForm />
      </div>
    );
  }
}

export default Settings;
