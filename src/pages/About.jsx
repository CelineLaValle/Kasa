import '../styles/App.css'

function About() {

  const [isOpen, setIsOpen] = useState(false); // L'état pour ouvrir/fermer le collapse
  setIsOpen(true);

  return (
    <div>
      <h1> About </h1>
    </div>
  )
}

export default About
