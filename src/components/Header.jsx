import '../styles/Header.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';


function Header() {
    return (
        <div className="headerContainer">
            <div className="header">
                <img className="logo" src={logo} alt="logo" />
                    <nav className="navHeader">
                        <Link to="/" className="navLink">Accueil</Link>
                        <Link to="/about" className="navLink">A Propos</Link>
                    </nav>
            </div>
       </div>
    )
}

export default Header