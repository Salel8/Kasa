import {useEffect, useState} from "react";
import '../../styles/card.css'




function Card() {
    const [logements, setLogements] =  useState([]);
 
    useEffect(() => {
 
       fetch('/logements.json').then(response => response.json()).then(data => {
          setLogements(data);
       })
 
    }, [])
 
 
     
 
     return (
     <div className="conteneur_ensemble_card">
        {logements.map(logement => (
         <div key={logement.id} className="conteneur_card">
            <a href={'/Logement/'+logement.id} className='lien_card'>
            <img className="image_card" src={logement.cover} alt="Photo d'un logement" />
            <p className="texte_card">{logement.title}</p>
            </a>
        </div>
        ))}
     </div>
     )
 }

 export default Card