import Carrousel from '../components/Logement/carrousel.jsx'
import Information from '../components/Logement/information.jsx'
import '../styles/font.css'



function Logement(){
    return (
        <div className="margin_page_logement">
            <Carrousel />
            <Information />
        </div>
    )

}

export default Logement