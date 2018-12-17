import React from "react";
import PropTypes from "prop-types";
import "./BaseSelect.css";

export default function BaseSelect(props) {
  const { id, value, handleChange, options, labelName } = props;
  const optionList = options.map(el => (
    <option value={el.value} key={`${el.value}${id}`}>
      {el.text}
    </option>
  ));

  return (
    <label className="BaseSelect" htmlFor={id}>
      <span>{labelName}</span>
      <select
        className="BaseSelect__options"
        id={id}
        value={value}
        onChange={handleChange}
      >
        {optionList}
      </select>
    </label>
  );
}
BaseSelect.propTypes = {
  id: PropTypes.string.isRequired,
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
