import {useEffect, useState} from "react";
import '../../styles/card.css'


//const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());
//const reponse = fetch("http://localhost:3000/api/products/" + nomUrl).then((response)=> response.json()).then((produits)=>{});

/*async function Card() {
    const response = await fetch("/logements.json");
    const logements = await response.json();
    //console.log(logements);
    //const title = 'Chez vous, partout et ailleurs'

    return (
       //const response = fetch("/logements.json").then((response)=> response.json()).then((logements)=>{

        <div>
            {logements.map((logement) => (
            <div key={logement.id}>
                <img className="img" src={logement.cover} alt="Photo d'un logement" />
                <p>{logement.title}</p>
            </div>
            ))}
        </div>
        //});
    )
}

export default Card*/

function Card() {
    const [logements, setLogements] =  useState([]);
 
    useEffect(() => {
 
       fetch('/logements.json').then(response => response.json()).then(data => {
          setLogements(data);
       })
 
    }, [])
 
 
     //const myArray = ['Jack','Mary','John','Krish','Navin'];
     //let { id } = useParams();
     //let lien = "/Logement" + {key};
     //console.log({id});
 
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