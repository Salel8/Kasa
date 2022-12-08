//const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());
//const reponse = fetch("http://localhost:3000/api/products/" + nomUrl).then((response)=> response.json()).then((produits)=>{});

const logements = await fetch("logements.json").then(logements => logements.json());

function Card() {
    //const title = 'Chez vous, partout et ailleurs'
    return (
        <div>
            {logements.map((logement) => (
                <div key={logement.id}>
                    <img className="img" src={logement.cover} alt="Photo d'un logement" />
                    <p>{logement.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Card