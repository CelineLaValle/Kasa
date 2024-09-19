import '../styles/Logements.css'
import Error from '../pages/Error'
import Tags from '../components/Tags'
import annonces from '../../data/logements.json'
import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';


function LogementsDetail() {
    const {id} = useParams();
    console.log(id);
    // const annonce =
    // annonces.map((annonce) =>  {
    //     if (id == annonce.id) {
    //         console.log(annonce)
    //     }
    // });
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

    // const Annonce = ({ rating }) => {
    //     const stars = [];
    //     for (let i = 0; i < rating; i++) {
    //       stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    //     }}

    return (
       <div className="logementsDetail">
        <Carousel 
            arrayPictures={annonce.pictures}
        />
        <div className="logementInfo">
            <h2 className="logementTitle">{annonce.title}</h2>
            <p className="logementLocation">{annonce.location}</p>
            <Tags />
        </div>
        <div className="logementHostRating">
            <p className='logementHost'>{annonce.host.name}</p>
            <img src={annonce.host.picture} alt={annonce.host.name} className="logementHostPicture" />
            {/* <div className='logementRating'>{annonce.rating}{stars}</div> */}
        </div>
       </div>
      );
    }

export default LogementsDetail;



// {/* 
//         // <div className="card-container">
//         //     {annonces.map((annonce) => (
//         //         <div key={annonce.id} className="pictures">
//         //             <img src={annonce.pictures} alt={annonce.title} className="card-pictures" />
//         //             <h2 className="card-title">{annonce.title}</h2>
//         //             <div className="host-info">
//         //                     <img src={annonce.host.picture} alt={annonce.host.name} className="host-picture" />
//         //                     <p>{annonce.host.name}</p>
//         //             </div>
//         //                 <p className="card-rating">Rating: {annonce.rating} / 5</p>

//         //                 <p className="card-location">{annonce.location}</p>

//         //             <div className="card-equipments">
//         //                 <h3>Equipments:</h3>
//         //                     <ul>
//         //                         {annonce.equipments.map((equipment, index) => (
//         //                             <li key={index}>{equipment}</li>
//         //                         ))}
//         //                     </ul>
//         //             </div>
//         //         </div>
//         //     ))}
//         // </div> */}

// return (
//   <div className="card-container">
//     <div className="pictures">
//       <img src={annonce.pictures} alt={annonce.title} className="card-pictures" />
//     </div>
//     <h2 className="card-title">{annonce.title}</h2>
//   </div>
// );