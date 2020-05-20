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
         <li>
          <Link style={navStyle} to="/Apropos">À propos</Link>
         </li>
         <li>
          <Link style={navStyle} to="/Projets">Projets</Link>
         </li>
         <li>
          <Link style={navStyle} to="/Contact">Contact</Link>
         </li>
        
        </ul>
      </div>
    </nav>
  </div>
 );
}

export default Navbar;