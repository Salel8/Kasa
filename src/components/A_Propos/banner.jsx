import banner from '../../assets/Banner_a_propos.png'
import '../../styles/banner.css'

function Banner() {
    return (
        <div className='conteneur_banner'>
            <img src={banner} alt='Bannière paysage montagneux' className='image_banner'/>
        </div>
    )
}

export default Banner