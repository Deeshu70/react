import React from 'react';

const ServicesComponent = () => {
  const servicesLeft = [
    {
      title: 'Service 1',
      content: 'Description of Service 1',
      image: './images/service1.png', // Image URL for Service 1
    },
    {
      title: 'Service 2',
      content: 'Description of Service 2',
      image: 'https://via.placeholder.com/100', // Image URL for Service 2
    },
    {
      title: 'Service 3',
      content: 'Description of Service 3',
      image: 'https://via.placeholder.com/100', // Image URL for Service 3
    },
  ];

  const servicesRight = [
    {
      title: 'Service 4',
      content: 'Description of Service 4',
      image: 'https://via.placeholder.com/100', // Image URL for Service 4
    },
    {
      title: 'Service 5',
      content: 'Description of Service 5',
      image: 'https://via.placeholder.com/100', // Image URL for Service 5
    },
    {
      title: 'Service 6',
      content: 'Description of Service 6',
      image: 'https://via.placeholder.com/100', // Image URL for Service 6
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Column */}
      <div className="w-1/2 p-10 bg-white">
        {servicesLeft.map((service, index) => (
          <div key={index} className="mb-8">
            <div className="w-12 h-12 bg-blue-200 rounded-lg mb-2">
              <img src={service.image} alt={`Service ${index + 1}`} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.content}</p>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="w-1/2 p-10 bg-gray-200">
        {servicesRight.map((service, index) => (
          <div key={index} className="mb-8">
            <div className="w-12 h-12 bg-blue-200 rounded-lg mb-2">
              <img src={service.image} alt={`Service ${index + 4}`} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
