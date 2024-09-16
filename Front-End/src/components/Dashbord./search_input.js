import React, { useState } from 'react';
import './Input.css';

const Input1 = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="containr">
        <input
          className="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className={`mainbox ${isChecked ? 'collapsed' : ''}`}>
          <div className="iconContainer" onClick={handleCheckboxChange}>
            <svg
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="search_icon"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
            </svg>
          </div>
          <input
            className="search_input"
            placeholder="Search"
            type="text"
            style={{ display: isChecked ? 'block' : 'none' }}
          />
        </div>
      </div>
    );
  };

  const Input2 = ({placeholder}) => {
    const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue("");
  };

  return (
    <div className='Input2Container'>
    <form role="search" className="form">
      <button className="search-btn" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" />
        </svg>
      </button>
      <input
        className="input"
        type="text"
        placeholder="Type your text"
        value={inputValue}
        onChange={handleInputChange}
        required
      />
      <button
        className="reset"
        type="reset"
        onClick={handleReset}
        style={{
          opacity: inputValue ? 1 : 0,
          visibility: inputValue ? "visible" : "hidden",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </form>
    </div>
  );
  }

  const Search_input = ({ind, placeholder}) => {
    if (ind === 1) {
        return <Input1 />
    }
    if (ind === 2)
      return <Input2 placeholder={placeholder}/>
    }

export default Search_input;
