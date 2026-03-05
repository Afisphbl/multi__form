import React from "react";
import "./InputField.css";

function InputField({ label, id, ...rest }) {
  return (
    <div className="input-field-container">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input className="input-element" type="text" id={id} {...rest} />
    </div>
  );
}

export default InputField;
