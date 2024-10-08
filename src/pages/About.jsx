import '../styles/About.css'
import Collapse from '../components/Collapse.jsx'
import Banner from '../components/Banner.jsx'
import about from '../assets/about.png';



function About() {

  // const [isOpen, setIsOpen] = useState(false); // L'état pour ouvrir/fermer le collapse


  return (
    <div>
      <Banner 
      title=""
      img={about}
      opacity={0.3}
      />
      <div className="aboutCollapse">
      <Collapse 
      title="Fiabilité"
      text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."     
      />
      <Collapse 
      title="Respect"
      text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Collapse 
      title="Service"
      text="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
      />
      <Collapse 
      title="Sécurité"
      text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères que sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
      </div>
    </div>
  )
}

export default About
