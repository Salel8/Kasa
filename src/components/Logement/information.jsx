import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import '../../styles/information.css'
import etoile_rouge from '../../assets/Etoile_rouge.png'
import etoile_grise from '../../assets/Etoile_grise.png'



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
    
    

    /*let boucle_tag = for (let i = 0; i < tag_logement.length; i++) {
        // Ceci sera exécuté 5 fois
        // À chaque éxécution, la variable "pas" augmentera de 1
        // Lorsque'elle sera arrivée à 5, le boucle se terminera.
        console.log('Faire ' + pas + ' pas vers l\'est');
      }*/
    
      //{logements_tag[numero_tableau_logements]}

    

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
                <div>
                    {stars}
                </div>
            </div>
        </div>
    )
}

export default Information