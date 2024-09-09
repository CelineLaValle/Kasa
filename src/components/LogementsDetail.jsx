import '../styles/Logements.css'
import Error from '../pages/Error'
import annonces from '../../data/logements.json'
import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom';


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

    return (
       <div className="">
        <Carousel 
            arrayPictures={annonce.pictures}
        />
    {/* <div className="">
      <img src={annonce.pictures} alt={annonce.title} className="" />
    </div> */}
    <h2 className="">{annonce.title}</h2>
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