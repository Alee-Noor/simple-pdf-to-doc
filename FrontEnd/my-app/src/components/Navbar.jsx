import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PDF Converter</h1>
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/convert">Converter</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
