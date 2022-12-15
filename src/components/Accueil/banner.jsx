import banner from '../../assets/Banner_accueil.png'
import '../../styles/banner.css'

function Banner() {
    const title = 'Chez vous, partout et ailleurs'
    return (
        <div className='conteneur_banner'>
            <img src={banner} alt='Bannière paysage bord de côte avec forêt' className='image_banner'/>
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner