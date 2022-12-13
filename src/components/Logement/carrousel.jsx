import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Carrousel() {
    const [logements, setLogements] =  useState([]);

    const [indexPictures, setIndexPictures] =  useState([0]);
    //<img src={logements.pictures[indexPictures]} alt="Carrousel d'image" />
 
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
    //async function tab1() { return console.log(logements[0].pictures)};
    //console.log(tab1);
    const logements_pictures = logements.map(logements => logements.pictures);
    let tableau_image1 = logements_pictures[numero_tableau_logements];
    //let tableau_image2 = tableau_image1.forEach(element => element);
    //let tableau_image2 = tableau_image1;

    console.log(logements_pictures);
    console.log(tableau_image1);

    const logements_pictures_carrousel = logements.map(logements => logements.pictures[indexPictures]);
    let tableau_image_carrousel = logements_pictures_carrousel[numero_tableau_logements];
    console.log(tableau_image_carrousel);



    const tableau_image = [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ];
    const boutton_precedant = "<";
    const boutton_suivant = ">";
    /*<button onClick={() => setIndexPictures(indexPictures < 0 ? parseInt(tableau_image.length) - 1 : parseInt(indexPictures) - 1)}>{boutton_precedant}</button>
    <img src={tableau_image[indexPictures]} alt="Carrousel d'image" />
    <button onClick={() => setIndexPictures(indexPictures > parseInt(tableau_image.length) - 1 ? 0 : parseInt(indexPictures) + 1)}>{boutton_suivant}</button>*/

    return (
        <div>
            <button onClick={() => setIndexPictures(indexPictures < 0 ? parseInt(tableau_image1.length) - 1 : parseInt(indexPictures) - 1)}>{boutton_precedant}</button>
            <img src={tableau_image_carrousel} alt="Carrousel d'image" />
            <button onClick={() => setIndexPictures(indexPictures > parseInt(tableau_image1.length) - 1 ? 0 : parseInt(indexPictures) + 1)}>{boutton_suivant}</button>
        </div>
    )
}

export default Carrousel