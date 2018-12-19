import React, { Component } from "react";
import "./SettingsForm.css";
import PropTypes from "prop-types";
import BaseSelect from "../baseSelect/BaseSelect";
import { sizeOptions, complexityOptions } from "./suggestedOptions.json";

class SettingsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      size: 4,
      complexity: 2
    };
  }

  componentDidMount() {
    const { name, size, complexity } = this.props;
    this.setState({
      name,
      size,
      complexity
    });
  }

  handleChange = event =>
    this.setState({ [event.target.id]: event.target.value });

  handleSubmit = () => {
    const { name, size, complexity } = this.state;
    const { changeSettings, changeName } = this.props;
    changeSettings(+size, +complexity);
    changeName(name);
  };

  render() {
    const { name, size, complexity } = this.state;

    return (
      <form className="SettingsForm">
        <h3>Preferences</h3>

        <label className="SettingsForm__preferencesElement" htmlFor="name">
          <span>name:</span>
          <input
            className="SettingsForm__input"
            type="text"
            id="name"
            placeholder="your name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <BaseSelect
          id="size"
          value={+size}
          handleChange={event => this.handleChange(event)}
          options={sizeOptions}
          labelName="select game size:"
        />
        <BaseSelect
          id="complexity"
          value={+complexity}
          handleChange={event => this.handleChange(event)}
          options={complexityOptions}
          labelName="select game complexity:"
        />
        <div>
          <button
            className="SettingsForm__button"
            type="button"
            onClick={this.handleSubmit}
          >
            Set preferences
          </button>
        </div>
      </form>
    );
  }
}

SettingsForm.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  complexity: PropTypes.number.isRequired,
  changeSettings: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired
};

export default SettingsForm;
