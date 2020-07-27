import React, {useState, useEffect} from 'react';

function Travaux({match}) {
  useEffect(() => {
    fetchItem();
    console.log({match})
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.alanakra.fr/portfolio-2020/projet.php?id=${match.params.id}`);
    const item = await fetchItem.json();
    console.log(item);
    setItem(item)
  }

 return (
  <div>
    <h1 className="titre-projet">{item.titre}</h1>
    
    <div className="container">
     <div className="partie-texte">
     <p className="date-projet">{item.categorie} - {item.date}</p> 
     <p>{item.description}</p>
      <a href={item.lien} alt="Consulter le projet">Consulter le projet</a>
     </div>

     <div className="photo">
       <img src={item.lien_image} alt={`illustration de ${item.titre}`}></img>
     </div>

    </div>

  </div>
 );
}

export default Travaux;