import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import PDF from './assets/CV/CV-Alan-AKRA.pdf';
import photo from './assets/image/PANA0409_522.jpg';

function Apropos() {
 return (
  <div>
   <h1 className="titre-page">A propos</h1>
    <div className="container">
     <div className="partie-texte">
      <h3 className="accroche"> Ravi de vous rencontrer... <br></br>
   ...Allons-y, commençons</h3>
      <p className="texte-propos">
      Je m'appelle <strong>Alan AKRA</strong>, jeune étudiant polyvalent de 20 ans.
    Je suis quelqu'un de curieux qui n'hésite pas à découvrir d'autres moyens de m'améliorer.
    <br></br>
    <br></br>
    Je suis actuellement en deuxième année de <strong>DUT Métiers du Multimédia et de l'Internet</strong> à Champs-sur-Marne. Cette formation
    <strong>pluridisciplinaire</strong> m'a permis de découvrir différents domaines liés au multimédia tels que
    l'intégration web, le marketing, le référencement, l'accessibilité, la gestion de projet pour mener à bien un projet
    multimédia.
    <br></br>
    <br></br>
    J'ai eu l'occasion de mettre en pratique les notions apprises lors des cours mais également en projets tutorés ou
    bien lors de stages de fin d'année. Toutes ces connaissances et expériences m'ont permis de confirmer mon envie de
    travailler dans le domaine du <strong>web</strong>.
      </p>
      <a className="consulter" href={PDF}>Consulter mon CV PDF</a>
      </div>
      <div className="photo">
      <img src={photo} alt="Survolez la photo pour me décoouvrir" className="moi" id="moi"></img>
      </div>
    </div>
    <div className="project">
     <Link to="/Projets">
      Consulter mes projets
     </Link>
     </div>
  </div>
 );
}

export default Apropos;