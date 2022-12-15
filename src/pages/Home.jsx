import Banner from '../components/Accueil/banner.jsx'
import Card from '../components/Accueil/card.jsx'
import '../styles/fonction.css'


function Home() {
  return (
    <div className='conteneur_fonction'>
      <Banner />
      <Card />
    </div>
  );
}

export default Home;
