import banner from '../../assets/Banner_accueil.png'
//import '../../styles/Banner.css'

function Banner() {
    const title = 'Chez vous, partout et ailleurs'
    return (
        <div>
            <img src={banner} alt='Bannière paysage bord de côte avec forêt' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner