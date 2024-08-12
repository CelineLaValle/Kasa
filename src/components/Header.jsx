import '../styles/Header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';


function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
                <nav className="navHeader">
                    <Link to="/" className="navLink">Accueil</Link>
                    <Link to="/about" className="navLink">A Propos</Link>
                </nav>
       </div>
    )
}

export default Header