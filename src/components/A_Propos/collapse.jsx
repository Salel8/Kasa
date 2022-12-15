import { useState } from 'react';
import '../../styles/collapse.css'

function Collapse() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div>
            <div className='conteneur_collapse_titre'>
                <p>Flexibilité</p>
                <button onClick={() => setIsOpen(false)}>Fermer</button>
            </div>
            <div className='conteneur_collapse_texte'>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                   Les photos sont conformes aux logements, et toutes les informations
                   sont régulièrement vérifiées par nos équipes.
                </p>
            </div>
            
        </div>
    ) : (
        <div>
            <div className='conteneur_collapse_titre'>
                <p>Flexibilité</p>
                <button onClick={() => setIsOpen(true)}>Ouvert</button>
            </div>
        </div>
    )
}

export default Collapse