import React, { useState } from "react";

const Dropdown = ({ options, selectedOption, onOptionChange,dropDown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onOptionChange(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${dropDown}`}>
      <button
        className="bg-[#6556CD] text-white rounded w-[150px] h-[40px] px-5 py-2 flex justify-between items-center transition-colors duration-200 hover:bg-[#5043A9]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <span className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-[150px] bg-[#2A292F] rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              className="cursor-pointer text-white hover:bg-[#6556CD] hover:text-white p-2 h-[40px] transition-colors duration-200"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );  
};

export default Dropdown;
