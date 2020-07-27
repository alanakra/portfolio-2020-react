import React from 'react';
import email from './assets/image/email-24px.svg';
import './_contact.scss';
import linkedin from './assets/image/linkedin.svg';
import phone from './assets/image/cell-phone.svg';
import github from './assets/image/Octicons-mark-github.svg';

function Contact() {

    let jour = new Date();
    let heureAffiche = jour.getHours();
    let minuteAffiche = jour.getMinutes();
    let debutJournee = "et je suis disponible pour répondre à vos demandes ou questions .";
    let finJournee = ", mais il n'y a pas d'heure pour discuter...";
    let finDePhrase;

   if(minuteAffiche<=9){
      minuteAffiche = `0${minuteAffiche}`;
    }
   
   if(heureAffiche<=9){
      heureAffiche = `0${heureAffiche}`;
   }

   if(heureAffiche >= 8 && heureAffiche <= 18){
    finDePhrase = debutJournee;
   }else{
    finDePhrase = finJournee;
   }

 return (
  <div>
   <h1 className="titre-page">Ne soyez pas timide...<br></br>
    ...contactez-moi !
   </h1>
 <p className="discuss">Il est actuellement <span id="heureLocal">{heureAffiche}</span>:<span id="minutesLocal">{minuteAffiche}</span> <span id="finPhrase">{finDePhrase}</span>  </p>

   <div className="container-contact">
      <div className="container-mail block">
       <a href="mailto:bonjour@alanakra.fr"> 
       <img src={email} alt=""></img>
       <p>alanakra@hotmail.fr</p>
       </a>
      </div>

      <div className="container-linkedin block">
       <a href="https://www.linkedin.com/in/alanakra/" target="_blank" rel="noopener noreferrer">
       <img src={linkedin} alt=""></img>
       <p>Alan AKRA</p>
       </a>
      </div>

      <div className="container-tel block">
       <img src={phone} alt=""></img>
       <p>07 51 27 13 77</p>
      </div>

      <div className="container-github block">
       <a href="https://github.com/alanakra" target="_blank" rel="noopener noreferrer">
       <img src={github} alt=""></img>
       <p>alanakra</p>
       </a>
      </div>
   </div>
 </div>
 );
}

export default Contact;