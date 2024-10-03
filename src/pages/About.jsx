import '../styles/App.css'
import Colapse from '../components/Colapse'
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
      <Colapse 
      
      />
      <Colapse />
      <Colapse />
      <Colapse />
      <p>Fiabilité</p>
      <p>Respect</p>
      <p>Service</p>
      <p>Sécurité</p>
    </div>
  )
}

export default About
