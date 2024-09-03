import React, {useState, useEffect } from 'react';
import './Interrupteur.css'

const Powerlever = ({top, down, isOn, setIsOn}) => {
    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div className='switchContainer'>
        <div className={`label ${isOn ? 'active' : ''}`}>{top}</div>
        <label className="switch">
          <input type="checkbox" className="chk" checked={isOn} onChange={handleToggle} />
          <span className="slider" />
        </label>
        <div className={`label ${!isOn ? 'active' : ''}`}>{down}</div>
      </div>
    );
}

export default Powerlever;