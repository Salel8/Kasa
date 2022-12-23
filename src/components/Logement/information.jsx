import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../../styles/information.css'
import '../../styles/collapse_information.css'

import etoile_rouge from '../../assets/Etoile_rouge.png'
import etoile_grise from '../../assets/Etoile_grise.png'
import Collapse from '../../components/A_Propos/collapse.jsx'




function Information() {
    const [logements, setLogements] =  useState([]);

 
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

    const navigate = useNavigate();
    if (numero_tableau_logements==undefined || numero_tableau_logements==-1){
        navigate("/erreur");
    }
    
    let tab = logements[numero_tableau_logements];
    console.log(tab);
    console.log(typeof tab);
    
    const logements_title = logements.map(logements => logements.title);
    let titre_du_logement = logements_title[numero_tableau_logements];

    const logements_rating = logements.map(logements => logements.rating);
    let nombre_etoile_logement = logements_rating[numero_tableau_logements];

    const logements_name = logements.map(logements => logements.host.name);
    let nom_proprietaire_logement = logements_name[numero_tableau_logements];

    const logements_location = logements.map(logements => logements.location);
    let localisation_logement = logements_location[numero_tableau_logements];

    const logements_photo = logements.map(logements => logements.host.picture);
    let photo_profile_logement = logements_photo[numero_tableau_logements];
    //console.log(logements_photo);

    const logements_tags = logements.map(logements => logements.tags.length);
    

    let tags = [];
    for (let i = 0; i<logements_tags[numero_tableau_logements]; i++){
        let logement_tag = logements.map(logements => logements.tags[i]);
        tags.push(<p>{logement_tag[numero_tableau_logements]}</p>);
        //console.log(tags)
    }
    console.log(tags);

    let stars = [];
    for (let i = 0; i<nombre_etoile_logement; i++){
        stars.push(<img src={etoile_rouge} alt='Etoile rouge' />);
        //console.log(tags)
    }
    if (nombre_etoile_logement<5){
        for (let i = 0; i<5-nombre_etoile_logement; i++){
            stars.push(<img src={etoile_grise} alt='Etoile grise' />);
            //console.log(tags)
        }
    }


    const logements_description = logements.map(logements => logements.description);
    let description_du_logement = logements_description[numero_tableau_logements];

    const logements_equipement = logements.map(logements => logements.equipments);
    let equipement_du_logement = logements_equipement[numero_tableau_logements];

    

    const descriptifCollapse = {
        description: description_du_logement,
        equipement: equipement_du_logement ,
    }
    
    console.log(equipement_du_logement);

    
    const logements_aaaa = logements.map(logements => logements.equipments);
    let aaaa_logement = logements_aaaa[numero_tableau_logements];

    let tableau = [];
    
    
    console.log(typeof aaaa_logement);
    console.log(logements_aaaa);
        
    
    let aaaaa = [aaaa_logement].flat();
    aaaaa.splice(6,1)
    console.log(aaaaa);
    
    
    
    let aaaa = <ul>{aaaaa.map((logements, index) => (
        <li key={`${logements}-${index}`}>{ logements }</li>
    ))}</ul>;
    

    return (
        <div className="conteneur_ensemble">
            <div className="conteneur_ligne_1">
                <div>
                    <h1>{titre_du_logement}</h1>
                </div>
                <div className="conteneur_nom_et_photo">
                    <p>{nom_proprietaire_logement}</p>
                    <img src={photo_profile_logement} alt='Photo de profile du propriétaire' />
                </div>
            </div>
            <div className="conteneur_ligne_2">
                <p>{localisation_logement}</p>
            </div>
            <div className="conteneur_ligne_3">
                <div className="conteneur_tags">
                    {tags}
                </div>
                <div className="conteneur_image_etoile">
                    {stars}
                </div>
            </div>
            <div className="container_collapse_logement">
                <Collapse collapseType="Description" collapseValue={description_du_logement} className="conteneur_titre_texte"/>
                <Collapse collapseType="Équipements" collapseValue={aaaa} className="conteneur_titre_texte"/>
            </div>
        </div>
    )
}

export default Information