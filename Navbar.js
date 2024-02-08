import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      {/* Display the hamburger menu icon */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="menu-toggle md:hidden" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Link to="/" className="text-white font-bold">Sirmillion Services</Link>
        {/* For small screens, show the hamburger menu icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <svg
            className="h-6 w-6 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      {/* Navigation links */}
      <ul className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link to="/" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/skills" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleMenu}>Skills</Link>
        </li>
        <li>
          <Link to="/services" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleMenu}>Services</Link>
        </li>
        <li>
          <Link to="/hire" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleMenu}>Testimonials</Link>
        </li>
        <li>
          <Link to="/register" className="block px-4 py-2 text-white hover:bg-gray-700" onClick={toggleMenu}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
