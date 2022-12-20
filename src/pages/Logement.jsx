import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Carrousel from '../components/Logement/carrousel.jsx'
import Information from '../components/Logement/information.jsx'
import Collapse from '../components/A_Propos/collapse.jsx'




function Logement(){
    const [logements, setLogements] =  useState([]);

    const [indexPictures, setIndexPictures] =  useState([0]);
    //<img src={logements.pictures[indexPictures]} alt="Carrousel d'image" />
 
    useEffect(() => {
 
       fetch('/logements.json').then(response => response.json()).then(data => {
          setLogements(data);
       })
 
    }, [])

    let { id } = useParams();  //on récupère l'id de l'url

    const logements_id = logements.map(logements => logements.id);
    console.log(logements_id);
    let numero_tableau_logements = logements_id.findIndex((dislike) => dislike==id);
    console.log(logements_id.findIndex((dislike) => dislike==id));

    const logements_description = logements.map(logements => logements.description);
    let description_du_logement = logements_description[numero_tableau_logements];

    const logements_equipement = logements.map(logements => logements.equipments);
    let equipement_du_logement = logements_equipement[numero_tableau_logements];

const descriptifCollapse = {
    description: description_du_logement,
    equipement: equipement_du_logement,
}

    return (
        <div className="margin_page_logement">
            <Carrousel />
            <Information />
            <div>
            <Collapse collapseType="Description" collapseValue={descriptifCollapse.description}/>
            <Collapse collapseType="Équipements" collapseValue={descriptifCollapse.equipement}/>
            </div>
        </div>
    )

}

export default Logement