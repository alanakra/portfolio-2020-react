import React from 'react';
import {Link} from 'react-router-dom';
import './_apropos.scss';
import PDF from './assets/CV/CV-Alan-AKRA.pdf';
import photo from './assets/image/PANA0409_522.jpg';

function Apropos() {
 return (
  <div>
   <h1 className="titre-page">A propos</h1>
    <div className="container">
     <div className="partie-texte">
      <p className="texte-propos">
      Je m'appelle <strong>Alan AKRA</strong>, jeune étudiant polyvalent de 20 ans. Je suis quelqu'un de curieux qui n'hésite pas à découvrir d'autres moyens de devenir encore meilleur chaque jour.
    <br></br>
    <br></br>
    Récemment diplômé d'un <strong>DUT Métiers du Multimédia et de l'Internet</strong> à Champs-sur-Marne. Cette formation <strong>pluridisciplinaire</strong> m'a permis de découvrir différents domaines liés au multimédia tels que
    le développement web, le marketing ou encore la gestion de projet pour mener à bien un projet
    multimédia.
    <br></br>
    <br></br>
    
    J'ai eu l'occasion de mettre <Link to="/Projets" className="pratique">en pratique</Link> les notions apprises lors des cours mais également en projets tutorés ou
    bien lors de stages de fin d'année. Toutes ces connaissances et expériences m'ont permis de confirmer mon envie de
    travailler dans le domaine du <strong>web</strong>.
      </p>
      <a className="consulter" href={PDF}>Consulter mon CV PDF</a>
      </div>
      <div className="photo">
      <img src={photo} alt="Survolez la photo pour me décoouvrir" className="moi" id="moi"></img>
      </div>
    </div>
  </div>
 );
}

export default Apropos;