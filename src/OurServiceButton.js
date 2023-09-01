import React from 'react';

const OurServicesButton = () => {
  return (
    <div className="flex  items-center justify-center bg-gray-100">
      <div className="mt-8 mb-4"> {/* Adjust the margin-top (mt) and margin-bottom (mb) values as needed */}
        <button className="relative bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105">
          Our Services
          <div className="absolute left-0 right-0 top-10 bottom-0 bg-green-600 opacity-25 animate-ping rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default OurServicesButton;
