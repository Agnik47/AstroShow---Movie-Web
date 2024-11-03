import React from 'react';
import L404 from '../accets/L404.gif';
import { useNavigate } from 'react-router-dom';

const ERROR = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#1F1E24] flex items-center justify-center flex-col text-white gap-5 p-4">
      <img 
        src={L404} 
        alt="Page not found" 
        className="w-[60vw] h-[40vh] md:w-[30vw] md:h-[50vh] object-contain" 
      />
      <h1 className="text-2xl md:text-3xl font-bold text-center">404 - Page Not Found</h1>
      <p className="text-md md:text-lg text-center">Oops! Looks like you cross a wrong turn.</p>
      <p className="text-xs md:text-sm text-gray-400 text-center">
        This page had some bad luck… a black cat scared it off the internet.
      </p>
      <button 
        onClick={() => navigate('/')}
        className="mt-5 px-4 py-2 md:px-6 md:py-2 rounded-lg bg-[#6556CD] hover:bg-[#4a3ab5] transition duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default ERROR;
