import { useState, createContext } from 'react';
import '../../styles/collapse.css'
import chapeau_haut from '../../assets/Chapeau_haut.png'
import chapeau_bas from '../../assets/Chapeau_bas.png'

const ThemeContext = createContext()


/*const descriptifCollapse = {
    flexibilite: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    sécurité:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos service. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
}*/

/*Les annonces postées sur Kasa garantissent une fiabilité totale. 
                   Les photos sont conformes aux logements, et toutes les informations
                   sont régulièrement vérifiées par nos équipes.*/

function Collapse({collapseValue, collapseType}) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? ( <ThemeContext.Provider value={{ collapseValue, collapseType }}>
        <div className='conteneur_ensemble_titre_texte'>
            <div className='conteneur_collapse_titre'>
                <p>{collapseType}</p>
                <button onClick={() => setIsOpen(false)}><img src={chapeau_haut} alt='Symbole chapeau pointant vers le haut' /></button>
            </div>
            <div className='conteneur_collapse_texte'>
                <p>{collapseValue}</p>
            </div>
            
        </div>
        </ThemeContext.Provider>
    ) : ( <ThemeContext.Provider value={{ collapseValue, collapseType }}>
        <div className='conteneur_ensemble_titre_texte'>
            <div className='conteneur_collapse_titre'>
                <p>{collapseType}</p>
                <button onClick={() => setIsOpen(true)}><img src={chapeau_bas} alt='Symbole chapeau pointant vers le bas' /></button>
            </div>
        </div>
        </ThemeContext.Provider>
    )
}

export default Collapse