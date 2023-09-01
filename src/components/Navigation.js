import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  const handleNavbarClick = () => {
    setNavbarActive(!navbarActive);
  };

  const handleNavbarMouseEnter = () => {
    setNavbarActive(true);
  };

  const handleNavbarMouseLeave = () => {
    setNavbarActive(false);
  };

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    // Implement your search logic here
  };

  const handleSubmenuClick = (event) => {
    // Handle submenu click logic here
  };

  return (
    <div className={`relative pb-20 ${navbarActive ? 'active' : ''}`}>
      <div>
      <nav
        className={`bg-transparent text-white py-4 relative z-10 ${navbarActive ? 'active' : ''}`}
        onClick={handleNavbarClick}
        onMouseEnter={handleNavbarMouseEnter}
        onMouseLeave={handleNavbarMouseLeave}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <a href=""><img src="./images/My project.png" alt="Logo" className="h-12" /></a>
            <ul className="ml-8 flex space-x-6">
              <li className="relative group">
                <a href="#" className="hover:text-blue-300">Home</a>
                <ul className="hidden absolute left-0 mt-2 bg-white text-black rounded-lg p-2 group-hover:block">
                  <li><a href="#">Submenu Item 1</a></li>
                  <li><a href="#">Submenu Item 2</a></li>
                  {/* Add more submenu items */}
                </ul>
              </li>
              <li className="submenu relative group">
                <a href="#" className="hover:text-blue-300">Services</a>
                <ul className="hidden absolute left-0 mt-2 bg-white text-black rounded-lg p-2 group-hover:block">
                  <li><a href="#">Submenu Item 1</a></li>
                  <li><a href="#">Submenu Item 2</a></li>
                  {/* Add more submenu items */}
                </ul>
              </li>
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Blog</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              <li><a href="#" className="hover:text-blue-300">Careers</a></li>
            </ul>
          </div>
          <div className="hidden md:flex space-x-6">
            <input
              type="text"
              id="searchInput"
              placeholder="Search"
              className="bg-white text-black border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="md:hidden">
            {/* Mobile menu button (you might need JavaScript to toggle the menu) */}
          </div>
        </div>
      </nav>
      </div>
      <div
        className={`background-image absolute inset-0 animate-pulse-slow ${navbarActive ? 'active' : ''}`}
        style={{
          backgroundImage: "url('./images/hero.jpg')", // Replace with your background image URL
        }}
      ></div>
      

      <div className="container mx-auto mt-8">
        <main className="content-box px-8 flex flex-col relative z-10">
          <section className="mb-8 flex flex-col-reverse md:flex-row">
            <div className="left-content w-full md:w-1/2 pr-8">
              <h1 className="text-2xl font-semibold mb-4">A VISION OF YOUR DREAMS</h1>
              <p>At Neophyte Consulting Services, we believe in taking a collaborative approach to solve complex business problems. We work closely with our clients to understand their unique challenges and tailor our services to meet their specific needs. We can't wait to start working together.</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white animate-bounce font-semibold py-2 px-4 rounded-full">Consult Us</button>
            </div>
            <div className="right-content w-full md:w-3/4 pl-10 h-full">
              <img src="./images/bgbgg.jpg" alt="Consulting Services" className="rounded-lg shadow-md delay-100" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Navigation;
