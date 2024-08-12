import '../styles/Card.css'
import annonces from '../../data/logements.json'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className="card-container">
            {annonces.map((annonce) => (
                <div key={annonce.id} className="card">
                <Link to={`/logement/${annonce.id}`} className="navLink">
                    <img src={annonce.cover} alt={annonce.title} className="card-cover" />
                    <h2 className="card-title">{annonce.title}</h2>
                </Link>
                </div>
            ))}
        </div>
    );
}

export default Card