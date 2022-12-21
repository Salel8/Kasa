import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../../styles/information.css'
import etoile_rouge from '../../assets/Etoile_rouge.png'
import etoile_grise from '../../assets/Etoile_grise.png'
import Collapse from '../../components/A_Propos/collapse.jsx'




function Information() {
    const [logements, setLogements] =  useState([]);

    const [indexPictures, setIndexPictures] =  useState([0]);
    //<img src={logements.pictures[indexPictures]} alt="Carrousel d'image" />
 
    useEffect(() => {
 
       fetch('/logements.json').then(response => response.json()).then(data => {
          setLogements(data);
       })
 
    }, [])

    let { id } = useParams();  //on récupère l'id de l'url
    //console.log(id);

    //console.log(logements[0]);
    //console.log(logements[0].id.includes("c67ab8a7"));
    //console.log(logements[0].id);

    const logements_id = logements.map(logements => logements.id);
    console.log(logements_id);
    let numero_tableau_logements = logements_id.findIndex((dislike) => dislike==id);
    console.log(logements_id.findIndex((dislike) => dislike==id));

    const navigate = useNavigate();
    if (numero_tableau_logements==undefined || numero_tableau_logements==-1){
        navigate("/erreur");
    }
    
    //console.log(logements[0].pictures);
    let tab = logements[numero_tableau_logements];
    console.log(tab);
    console.log(typeof tab);
    //async function tab1() { return console.log(logements[0].pictures)};
    //console.log(tab1);
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
    //let tag_logement = logements_tags[numero_tableau_logements];
    //console.log(logements_tags[numero_tableau_logements]);
    //console.log(tag_logement)
    //const number_tags = logements_tags[numero_tableau_logements].length;

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

    /*let boucle_tag = for (let i = 0; i < tag_logement.length; i++) {
        // Ceci sera exécuté 5 fois
        // À chaque éxécution, la variable "pas" augmentera de 1
        // Lorsque'elle sera arrivée à 5, le boucle se terminera.
        console.log('Faire ' + pas + ' pas vers l\'est');
      }*/
    
      //{logements_tag[numero_tableau_logements]}

      /*let baba = <ul>for (e=0, e=equipement_du_logement, e++){<li>a</li>}</ul> 

      let babab = <ul>{logements.map((plant, index) => (
        <li key={`${plant}-${index}`}>{ plant }</li>
    ))}</ul>*/

    /*let aaaa = <ul>{logements.map((logements, index) => (
        <li key={`${logements}-${index}`}>{ logements.equipments }</li>
    ))}</ul>;*/

    /*let aaaa = <ul>{equipement_du_logement.forEach((logements, index) => (
        <li key={`${logements}-${index}`}>{ logements }</li>
    ))}</ul>;*/

    /*let aaa = <ul><li>{equipement_du_logement[0]}</li><li>{equipement_du_logement[1]}</li></ul>;

    console.log(aaa);*/

    //console.log(logements_id.findIndex((dislike) => dislike==id));

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
                <Collapse collapseType="Description" collapseValue={descriptifCollapse.description} className="conteneur_titre_texte"/>
                <Collapse collapseType="Équipements" collapseValue={descriptifCollapse.equipement} className="conteneur_titre_texte"/>
            </div>
        </div>
    )
}

export default Information