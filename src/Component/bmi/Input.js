import React from "react";
import "./input.css"

const Input = (props) => {
  return (
    <div className="bmi__input">
      <label className="input__label">{props.label}</label>
      <input className="input__bmi"
        type="number"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
