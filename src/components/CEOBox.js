import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CEOBox = () => {
  const testimonials = [
    {
      image: "./images/jaat.jpeg",
      message: "It was a great experience. From start to finish, Neophyte Consulting is very supportive and kind. Ankit is extremely professional and highly involved throughout the whole process by giving accurate information when needed. Thank you so much for giving us excellent resources, I’m extremely grateful",
      author: "Mr. Avinash Singh (CEO, Synergy Innovations Pvt. Ltd.)",
    },
    {
      image: "./images/jaat.jpeg ",
      message: "It was a great experience. From start to finish, Neophyte Consulting is very supportive and kind. Ankit is extremely professional and highly involved throughout the whole process by giving accurate information when needed. Thank you so much for giving us excellent resources, I’m extremely grateful",
      author: "Mr. Avinash Singh (CEO, Synergy Innovations Pvt. Ltd.)",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="relative">
      <h1 className="text-3xl font-bold text-center mb-4">
        <span className="relative inline-block rounded-full bg-blue-500 text-white px-4 py-1 ml-1 transition-opacity">NEOPHYTE</span>
        <span className="text-black px-1 py-1 ml-1 drop-shadow-lg">TESTIMONIAL</span>
      </h1>
      <Carousel showArrows={false} showThumbs={false} autoPlay infiniteLoop interval={5000}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-center bg-blue-100 p-2">
            <div className="w-1/2 p-2"> {/* Adjusted padding */}
              <div
                className="w-32 h-32 rounded-full bg-gray-300 bg-center bg-cover"
                style={{
                  backgroundImage: `url('${testimonial.image}')`,
                }}
              ></div>
            </div>
            <div className="w-1/2 p-2"> {/* Adjusted padding */}
              <h1 className="text-4xl font-bold mb-2">CEO's Message</h1>
              <p className="text-gray-700 mb-2">{testimonial.message}</p>
              <p className="text-gray-700 italic font-light">
                – {testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CEOBox;
