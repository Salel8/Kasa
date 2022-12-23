import { useState } from 'react';

import chapeau_haut from '../../assets/Chapeau_haut.png'
import chapeau_bas from '../../assets/Chapeau_bas.png'



function Collapse({collapseValue, collapseType}) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='conteneur_ensemble_titre_texte'>
            <div className='conteneur_collapse_titre'>
                <p>{collapseType}</p>
                <button onClick={() => setIsOpen(false)}><img src={chapeau_haut} alt='Symbole chapeau pointant vers le haut' /></button>
            </div>
            <div className='conteneur_collapse_texte'>
                <div>{collapseValue}</div>
            </div>
            
        </div>
    ) : (
        <div className='conteneur_ensemble_titre_texte'>
            <div className='conteneur_collapse_titre'>
                <p>{collapseType}</p>
                <button onClick={() => setIsOpen(true)}><img src={chapeau_bas} alt='Symbole chapeau pointant vers le bas' /></button>
            </div>
        </div>
    )
}

export default Collapse