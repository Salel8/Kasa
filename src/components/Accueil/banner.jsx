import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Chez vous, partout et ailleurs'
    return (
        <div>
            <img src={logo} alt='La maison jungle' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner