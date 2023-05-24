import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="nav_1"><a href="#api-docs">API Docs</a></li>
        <li className="nav_1"><a href="#about-us">About Us</a></li>
        <li className="nav_1"><a href="#faq">FAQ</a></li>
        <li className="nav_1"><a href="#tos">Terms of Service</a></li>
        <li className="getStarted"><a href="#get-started">Get Started for Free</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
