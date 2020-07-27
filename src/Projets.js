import React, {useState, useEffect} from 'react';
import'./_projets.scss';
import {Link} from 'react-router-dom';

function Projets() {
  useEffect(() => {
     fetchItems()
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
        const data = await fetch('https://api.alanakra.fr/portfolio-2020/projet.php');
        const items = await data.json();
        console.log(items);
        setItems(items)
  }
 return (
  <div>
   <h1 className="titre-page">Projets</h1>
   <p className="definition">Portfolio (nom masculin) \pɔʁt.fo.ljo\ :<br></br>
   Dossier personnel dans lequel les acquis de formation et d'expérience d'une personne sont définis et démontrés.</p>
   <section className="container-projets">
    {items.map(item => (
      <article>
        <Link to={`Projets/${item.id}`}>
        <img src={item.lien_image} alt=""></img>
        <p key={item.id} className="title-project">{item.titre}</p>
        <p>{item.date}</p>
        <p>{item.categorie}</p>
        </Link>
      </article>
      
    ))}
   </section>
  </div>
 );
}

export default Projets;