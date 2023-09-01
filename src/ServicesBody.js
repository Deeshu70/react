import React from 'react';

const ServicesBody = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 p-10 bg-white">
        <h1 className="text-3xl font-bold mb-4">
          DEMAND FIRST-RATE BEST SERVICES
        </h1>
        <p className="text-gray-700 mb-6">
          Neophyte Consulting Services is a one-stop solution for all your
          consulting needs. We specialize in Education Consulting, Recruitment
          Consulting, Sales Consulting, and Web Development Consulting. Our
          team of experienced consultants is committed to providing tailor-made
          solutions that cater to your unique requirements. From designing and
          implementing effective marketing strategies to developing websites
          that stand out, we help businesses achieve their goals. Contact us
          today to see how we can help you reach your full potential.
        </p>
      </div>

      <div className="w-1/2 grid grid-cols-2 gap-4 p-10 bg-gray-200">
        {/* Service Image 1 */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="./images/edu.jpg" // Replace with your image URL
            alt="Service 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold">Service 1</p>
          </div>
        </div>

        {/* Service Image 2 */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="./images/edu.jpg" // Replace with your image URL
            alt="Service 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold">Service 2</p>
          </div>
        </div>

        {/* Service Image 3 */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="./images/edu.jpg" // Replace with your image URL
            alt="Service 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold">Service 3</p>
          </div>
        </div>

        {/* Service Image 4 */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="./images/edu.jpg" // Replace with your image URL
            alt="Service 4"
            className="w-full h-full object-cover animate-bounce"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold">Service 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBody;
