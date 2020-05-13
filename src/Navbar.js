import React from 'react';

function Navbar(props) {
 return (
  <div>
    <nav>
      <div className="nav-name">
      </div>
      <div className="nav-menu">
       <a>À propos</a>
       <a>Projets</a>
       <a>Contact</a>
      </div>
    </nav>
  </div>
 );
}

export default Navbar;