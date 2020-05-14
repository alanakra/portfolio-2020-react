import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Navbar() {

  const navStyle = {
    color: "white",
  };

 return (
  <div>
    <nav>
      <div className="nav-name">
        <Link style={navStyle} to="/">
        Alan AKRA
        </Link>
      </div>
      <div className="nav-menu">
        <ul>
        <Link style={navStyle} to="/Apropos">
         <li>À propos</li>
        </Link>
        <Link style={navStyle} to="/Projets">
         <li>Projets</li>
        </Link>
        <Link style={navStyle} to="/Contact">
         <li>Contact</li>
        </Link>
        </ul>
      </div>
    </nav>
  </div>
 );
}

export default Navbar;