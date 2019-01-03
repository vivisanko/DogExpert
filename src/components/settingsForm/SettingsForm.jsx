import React, { PureComponent } from "react";
import "./SettingsForm.css";
import PropTypes from "prop-types";
import BaseSelect from "../baseSelect/BaseSelect";
import { sizeOptions, complexityOptions } from "./suggestedOptions.json";

class SettingsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      size: 4,
      complexity: 2
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const { name, size, complexity } = this.props;
    this.setState({
      name,
      size,
      complexity
    });
    if (name === "") {
      this.textInput.current.focus();
    }
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    const { name, size, complexity } = this.state;
    const { changeSettings, changeName } = this.props;
    changeSettings(+size, +complexity);
    changeName(name);
    event.preventDefault();
  };

  render() {
    const { name, size, complexity } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="SettingsForm">
        <h3>Preferences</h3>

        <label className="SettingsForm__preferencesElement" htmlFor="name">
          <span className="SettingsForm__description">name: </span>
          <input
            className="SettingsForm__input"
            autoComplete="off"
            type="text"
            name="name"
            placeholder="your name"
            value={name}
            onChange={this.handleChange}
            ref={this.textInput}
          />
        </label>
        <BaseSelect
          name="size"
          value={+size}
          handleChange={this.handleChange}
          options={sizeOptions}
          labelName="size:"
        />
        <BaseSelect
          name="complexity"
          value={+complexity}
          handleChange={this.handleChange}
          options={complexityOptions}
          labelName="complexity:"
        />
        <div>
          <input value="Apply" className="SettingsForm__button" type="submit" />
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
