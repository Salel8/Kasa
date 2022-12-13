import { useState } from 'react';

function Collapse() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div>
            <div>
                <p>Flexibilité</p>
                <button onClick={() => setIsOpen(false)}>Fermer</button>
            </div>
            <div>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                   Les photos sont conformes aux logements, et toutes les informations
                   sont régulièrement vérifiées par nos équipes.
                </p>
            </div>
            
        </div>
    ) : (
        <div>
            <div>
                <p>Flexibilité</p>
                <button onClick={() => setIsOpen(true)}>Ouvert</button>
            </div>
        </div>
    )
}

export default Collapse