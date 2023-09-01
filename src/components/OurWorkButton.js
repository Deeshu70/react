import React from 'react';

const OurWorkButton = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <button className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-600 opacity-25 animate-ping rounded-full"></div>
        <span className="relative z-10">Our</span> Work
      </button>
    </div>
  );
};

export default OurWorkButton;
