import logo from '../assets/Logo_footer.png'
import '../styles/Footer.css'
 
function Footer() {
    return (
        <div className='conteneur_footer'>
            <div>
                <img src={logo} alt='Logo Kasa' />
            </div>
            <div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
        
    )
}

export default Footer