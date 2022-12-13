import { Link } from 'react-router-dom'
import logo from '../../assets/Logo_header.png'
import '../../styles/Header.css'
 
function Header() {
    return (
        <div className='conteneur'>
            <div>
                <img src={logo} alt='Logo Kasa' />
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/A_Propos">A propos</Link>
            </nav>
        </div>
        
    )
}

export default Header