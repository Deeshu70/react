import React from 'react';

const WorkComponent = () => {
  return (
    <div className="flex h-screen bg-skyblue">
      <div className="w-1/2 relative">
        <div className="absolute inset-0 bg-white p-10">
          <h1 className="text-2xl font-bold mb-4">Our Work</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque aliquet tortor, eu elementum justo commodo in.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-3/4 flex justify-center items-center">
        <div className="w-60 h-full rounded-lg border-4 border-blue-500 overflow-hidden">
          <img
            src="https://via.placeholder.com/300x600" // Adjust the image URL and size as needed
            alt="Professional Work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
