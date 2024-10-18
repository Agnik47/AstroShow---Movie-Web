import React from 'react';
import Typewriter from 'typewriter-effect';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[#1F1E24]">
      <div className="loader border-4 border-t-4 border-gray-200 rounded-full w-16 h-16 animate-spin"></div>
      <p className="text-lg text-gray-600 mt-4 inline-flex items-center"> <span>Loading</span>
        <Typewriter
          options={{
            strings: ['......', '......'],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
    </div>
  );
};

export default Loader;
