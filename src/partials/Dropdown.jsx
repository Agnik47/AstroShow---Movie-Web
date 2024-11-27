import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, selectedOption, onOptionChange, dropDown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    onOptionChange(option);
    setIsOpen(false);
  };

  // Handle click outside of the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Attach and clean up the click event
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative inline-block ${dropDown}`} ref={dropdownRef}>
      <button
        className="bg-[#6556CD] text-white text-sm font-semibold rounded w-[150px] h-[40px] px-5 py-2 flex justify-between items-center transition-colors duration-200 hover:bg-[#5043A9]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption.toUpperCase()}
        <span className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1  overflow-hidden w-[150px] bg-[#2A292F] rounded-lg shadow-lg">
          {options.map((option,i) => (
            <div
              key={i}
              className="cursor-pointer text-white text-sm hover:bg-[#6556CD] p-2 h-[40px] transition-colors duration-200"
              onClick={() => handleOptionClick(option)}
            >
              {option.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// PropTypes for validation
Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  dropDown: PropTypes.string,
};

export default Dropdown;