import React from 'react';
import './App.scss';
import {NavLink} from 'react-router-dom';

function Navbar() {

  const navStyle = {
    color: "white",
  };

 return (
  <div>
    <nav>
      <div className="nav-name">
        <NavLink style={navStyle} to="/">
        Alan AKRA
        </NavLink>
      </div>
      <div className="nav-menu">
        <ul>
         <li>
          <NavLink style={navStyle} to="/Apropos">À propos</NavLink>
         </li>
         <li>
          <NavLink style={navStyle} to="/Projets">Projets</NavLink>
         </li>
         <li>
          <NavLink style={navStyle} to="/Contact">Contact</NavLink>
         </li>
        
        </ul>
      </div>
    </nav>
  </div>
 );
}

export default Navbar;