import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/signup">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
