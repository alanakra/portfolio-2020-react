import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
   
   // setTimeout(() => {
      const tabAccroche1 = ['étudiant 👨🏾‍💼','développeur 👨🏿‍💻','webmaster'];
      const tabAccroche2 = ['créatif 🎨.','polyvalent.',"à l'écoute.",'collaboratif 🤝.','curieux 👀.'];
    
      const accrocheAleatoire1 = tabAccroche1[Math.floor(Math.random()*tabAccroche1.length)];
      const accrocheAleatoire2 = tabAccroche2[Math.floor(Math.random()*tabAccroche2.length)];
   // },5000)
 return (
  <div className="supertitre">
     <h1 className="titre-page-accueil">Alan Akra</h1>
     <h2 className="accroche-first">Développeur front-end</h2>
     <h3 className="accroche">Bienvenue sur le portfolio d'un jeune <span id="accroche1">{accrocheAleatoire1}</span> <span id="accroche2">{accrocheAleatoire2}</span></h3>
     <div className="know-more">
      <Link to="/Apropos">En savoir plus</Link>
     </div>
  </div>
 );
}

export default Home;