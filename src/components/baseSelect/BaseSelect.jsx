import React from "react";
import PropTypes from "prop-types";
import "./BaseSelect.css";

export default function BaseSelect(props) {
  const { name, value, handleChange, options, labelName } = props;
  const optionList = options.map(el => (
    <option
      className="BaseSelect__option"
      value={el.value}
      key={`${el.value}${name}`}
    >
      {el.text}
    </option>
  ));

  return (
    <label className="BaseSelect" htmlFor={name}>
      <span className="BaseSelect__description">{labelName}</span>
      <select
        className="BaseSelect__select"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {optionList}
      </select>
    </label>
  );
}
BaseSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired,
  labelName: PropTypes.string
};
BaseSelect.defaultProps = {
  labelName: ""
};
