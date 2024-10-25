import '../styles/Logements.css'
import Error from '../pages/Error'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import annonces from '../../data/logements.json'
import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom';
import Collapse from './Collapse'

function LogementsDetail() {
    const {id} = useParams();
    console.log(id);
    let annonce = null; // Initialiser la variable annonce

    annonces.map((item) => {
        if (id === item.id) {
            annonce = item; // Stocker l'annonce correspondante
            console.log(annonce);
        }
    });

    // Vérifier si une annonce a été trouvée
    if (!annonce) {
        return <Error />
    }

    return (
       <div className="logementsDetail">
        <Carousel 
            arrayPictures={annonce.pictures}
        />
        <div className="logementInfoContainer">
        <div className="logementInfo">
            <h2 className="logementTitle">{annonce.title}</h2>
            <p className="logementLocation">{annonce.location}</p>
            <Tags tags={annonce.tags}/>
        </div>
        <div className="logementHostRating">
            <div className="hostInfo">
            <p className='logementHost'>{annonce.host.name}</p>
            <img src={annonce.host.picture} alt={annonce.host.name} className="logementHostPicture" />
            </div>
            <Rating rating={annonce.rating} />
        </div>
       </div>
    <div className="collapseContainer">
        <div className="collapseColonne">
            <Collapse 
            title="Description"
            text={annonce.description}
            />
        </div>
        <div className="collapseColonne">
            <Collapse 
            title="Equipements"
            text={annonce.equipments?.map((equipment, index) => (
                <p key={index}>{equipment}</p>
            ))}
            />
        </div>
    </div>
       </div>
      );
    }

export default LogementsDetail;