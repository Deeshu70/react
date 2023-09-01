import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>This is a placeholder content. Replace it with your actual content.</p>
        </div>
        
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="list-disc pl-6">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@example.com</p>
        </div>
        
        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-300"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-white hover:text-blue-300"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="text-white hover:text-blue-300"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
