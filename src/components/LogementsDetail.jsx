import '../styles/Logements.css'
import annonces from '../../data/logements.json'
import { useParams } from 'react-router-dom';

function LogementsDetail() {
    const {id} = useParams();
    console.log(id);
    annonces.map((annonce) =>  {
        if (id == annonce.id) {
            console.log(annonce)
        }
    });
 
    return (

        <div className="card-container">
            <div key={annonce.id} className="pictures">
                <img src={annonce.pictures} alt={annonce.title} className="card-pictures" />
            <h2 className="card-title">{annonce.title}</h2>
            
        </div>

    );
};

export default LogementsDetail



{/* 
        // <div className="card-container">
        //     {annonces.map((annonce) => (
        //         <div key={annonce.id} className="pictures">
        //             <img src={annonce.pictures} alt={annonce.title} className="card-pictures" />
        //             <h2 className="card-title">{annonce.title}</h2>
        //             <div className="host-info">
        //                     <img src={annonce.host.picture} alt={annonce.host.name} className="host-picture" />
        //                     <p>{annonce.host.name}</p>
        //             </div>
        //                 <p className="card-rating">Rating: {annonce.rating} / 5</p>

        //                 <p className="card-location">{annonce.location}</p>

        //             <div className="card-equipments">
        //                 <h3>Equipments:</h3>
        //                     <ul>
        //                         {annonce.equipments.map((equipment, index) => (
        //                             <li key={index}>{equipment}</li>
        //                         ))}
        //                     </ul>
        //             </div>
        //         </div>
        //     ))}
        // </div> */}