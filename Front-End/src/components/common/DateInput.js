import React, { useState } from "react";
import "./DateInput.css";

const DateInput = ({ label, value, onChange }) => {
  return (
    <div className="date-input-container">
      {label && <label className="date-input-label">{label}</label>}
      <input
        type="date"
        className="date-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DateInput;