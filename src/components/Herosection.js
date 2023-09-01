import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Column for Image */}
        <div className="md:w-1/2 md:pr-10 mt-6 md:mt-0">
          <img src="./images/hero.jpg" alt="Hero" className="w-3/4 rounded-lg shadow-md" />
        </div>
        
        {/* Right Column for Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl italic hover:not-italic mb-4 ml-0 text-center">WHO WE ARE</h1>
          <h1 className="text-4xl italic hover:not-italic mb-4 ml-0 text-center">WE'RE NEOPHYTE CONSULTING SERVICES</h1>
          <hr className="w-1/2 mx-auto border-t border-gray-400 h-2 mb-4" />
          <p className="text-gray-600 italic font-light text-center">
            A multi-dimensional consulting firm that provides comprehensive solutions in the areas of Education Consulting, Recruitment Consulting, Digital Marketing, and Web Development Consulting. Our team of seasoned professionals has extensive experience and expertise in these areas, enabling us to offer customized solutions that meet the unique needs of our clients. Our mission is to help businesses of all sizes and industries achieve their full potential by providing top-notch consulting services that drive growth, innovation, and success.
          </p>
          
          {/* Consult Us Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-6 transition duration-300 transform hover:scale-105 mx-auto">
            READ MORE
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
