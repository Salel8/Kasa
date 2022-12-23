import Banner from '../components/A_Propos/banner.jsx'
import Collapse from '../components/A_Propos/collapse.jsx'
import '../styles/font.css'
import '../styles/collapse_a_propos.css'

const descriptifCollapse = {
    fiabilité: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    sécurité:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos service. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
}

function A_Propos() {
  return (
    <div>
      <Banner />
      <div className='ensemble_conteneur_collapse'>
      <Collapse collapseType="Fiabilité" collapseValue={descriptifCollapse.fiabilité }/>
      <Collapse collapseType="Respect" collapseValue={descriptifCollapse.respect }/>
      <Collapse collapseType="Service" collapseValue={descriptifCollapse.service }/>
      <Collapse collapseType="Sécurité" collapseValue={descriptifCollapse.sécurité }/>
      </div>
    </div>
  );
}

export default A_Propos;