import React, { useState } from 'react';

const ReadMoreTestimonialButton = ({ testimonial }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-center">
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform ${
          isOpen ? 'scale-105' : ''
        }`}
        onClick={toggleReadMore}
      >
        {isOpen ? 'Read Less' : 'Read More'}
      </button>
      {isOpen && (
        <div
          className={`mt-4 px-4 py-20 bg-white rounded-lg overflow-hidden transition-all ease-in-out duration-300 ${
            isOpen ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className="text-gray-600 italic font-light">{testimonial}</p>
        </div>
      )}
    </div>
  );
};

export default ReadMoreTestimonialButton;
