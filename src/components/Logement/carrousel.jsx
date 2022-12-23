import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import '../../styles/carrousel.css'

function Carrousel() {
    const [logements, setLogements] =  useState([]);

    const [indexPictures, setIndexPictures] =  useState([0]);
 
    useEffect(() => {
 
       fetch('/logements.json').then(response => response.json()).then(data => {
          setLogements(data);
       })
 
    }, [])

    let { id } = useParams();
    console.log(id);

    //console.log(logements[0]);
    //console.log(logements[0].id.includes("c67ab8a7"));
    //console.log(logements[0].id);

    const logements_id = logements.map(logements => logements.id);
    console.log(logements_id);
    let numero_tableau_logements = logements_id.findIndex((dislike) => dislike==id);
    console.log(logements_id.findIndex((dislike) => dislike==id));
    //console.log(logements[0].pictures);
    let tab = logements[numero_tableau_logements];
    console.log(tab);
    console.log(typeof tab);
    //console.log(tab1);
    const logements_pictures = logements.map(logements => logements.pictures);
    let tableau_image1 = logements_pictures[numero_tableau_logements];
    
    const logements_pictures_length = logements.map(logements => logements.pictures.length);
    let longueur_tableau_image1 = logements_pictures_length[numero_tableau_logements];

    console.log(logements_pictures);
    console.log(longueur_tableau_image1);

    const logements_pictures_carrousel = logements.map(logements => logements.pictures[indexPictures]);
    let tableau_image_carrousel = logements_pictures_carrousel[numero_tableau_logements];
    //console.log(tableau_image_carrousel);



    const boutton_precedant = "<";
    const boutton_suivant = ">";

    return (
        <div className="margin_page">
            <button onClick={() => setIndexPictures(indexPictures == 0 ? parseInt(tableau_image1.length) - 1 : parseInt(indexPictures) - 1)} className="boutton_carrousel precedant">{boutton_precedant}</button>
            <img src={tableau_image_carrousel} alt="Carrousel d'image" className="image_carrousel"/>
            <button onClick={() => setIndexPictures(indexPictures == parseInt(tableau_image1.length) - 1 ? 0 : parseInt(indexPictures) + 1)} className="boutton_carrousel suivant">{boutton_suivant}</button>
            <p className="index_image">{parseInt(indexPictures) + 1}/{longueur_tableau_image1}</p>

        </div>
    )
}

export default Carrousel