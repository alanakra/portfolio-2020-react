import React from 'react';
import './projets.module.scss';
import {Link} from 'react-router-dom';
import life from './assets/image-liste-projets/Victor_gun_opti_web_500_300.jpg';
import portrait from './assets/image-liste-projets/Portrait-chinois_500_300.jpg';
import spotify_image from './assets/image-liste-projets/spotify_500_300.jpg';
import cv_interactif from './assets/image-liste-projets/capture_cv_interactif_500_300.jpg';
import project_plus from './assets/image-liste-projets/project_plus_500_300.jpg';
import festival_mmi from './assets/image-liste-projets/festival_mmi_500_300.jpg';
import video_res from './assets/image-liste-projets/miniature_yt.jpg';
import deez from './assets/image-liste-projets/deezweb_522.jpg';

function Projets() {
 return (
  <div>
   <h1 className="titre-page">Projets</h1>
   <p className="definition">Portfolio (nom masculin) \pɔʁt.fo.ljo\ :<br></br>
   Dossier personnel dans lequel les acquis de formation et d'expérience d'une personne sont définis et démontrés.</p>
   <section className="container-projets">
     <article className="projet">
      <Link>
        <img src={life} alt=""></img>
        <h2>Life</h2>
        <p>Février 2019</p>
        <p>Audiovisuel</p>
      </Link>
      </article>

      <article className="projet">
      <Link>
        <img src={portrait} alt=""></img>
        <h2>Mon portrait chinois</h2>
        <p>Février 2018</p>
        <p>Intégration web</p>
      </Link>
      </article>

      <article className="projet">
      <Link>
        <img src={spotify_image} alt=""></img>
        <h2>Redesign spotify</h2>
        <p>Avril 2019</p>
        <p>UI/UX Design</p>
      </Link>
      </article>

      <article className="projet">
      <Link>
        <img src={cv_interactif} alt=""></img>
        <h2>CV interactif</h2>
        <p>Mai 2019</p>
        <p>Intégration web</p>
      </Link>
      </article>

      <article className="projet">
      <Link>
        <img src={project_plus} alt=""></img>
        <h2>Project +</h2>
        <p>Juillet 2019</p>
        <p>Stage en entreprise</p>
      </Link>
      </article>

      <article className="projet">
      <Link>
        <img src={festival_mmi} alt=""></img>
        <h2>Festival MMI</h2>
        <p>2019 - 2020</p>
        <p>Projet tutoré</p>
      </Link>
      </article>

      <article className="projet">
      <Link>
        <img src={video_res} alt=""></img>
        <h2>Video resume</h2>
        <p>Décembre 2019</p>
        <p>Audiovisuel</p>
      </Link>
      </article>

      <article className="projet">
      <Link>
        <img src={deez} alt=""></img>
        <h2>Deezweb</h2>
        <p>Mars 2020</p>
        <p>Intégration Multimédia</p>
      </Link> 
     </article>
   </section>
  </div>
 );
}

export default Projets;