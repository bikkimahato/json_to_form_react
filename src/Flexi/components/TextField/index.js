import React from "react";

const TextField = ({ label, name, val, handleChange }) => (
  <div>
    <label>{label}</label>
    <input type="text" value={val} name={name} onChange={handleChange} />
  </div>
);

export default TextField;
