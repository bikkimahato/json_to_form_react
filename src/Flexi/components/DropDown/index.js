import React from "react";

const DropDown = ({ label, name, val = [], handleChange }) => (
  <div>
    <label>{label}</label>
    <select name={name} onChange={handleChange}>
      <option value="" />
      {val.map((el, index) => (
        <option key={index} value={el}>
          {el}
        </option>
      ))}
    </select>
  </div>
);

export default DropDown;
