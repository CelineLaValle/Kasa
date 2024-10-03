import '../styles/Logements.css'
// import logements from '../../data/logements.json';
import starCoral from '../assets/starCoral.png'; 
import starGrey from '../assets/starGrey.png';    


function Rating({ rating }) {
  const totalStars = 5; // Le nombre total d'étoiles à afficher
  console.log("Rating:", rating);

  return (
    <div className="rating">
      {Array.from({ length: totalStars }, (_, index) => (
        <img
          key={index}
          src={index < rating ? starCoral : starGrey} // Étoile coral si l'index est inférieur à la note, sinon étoile grise
          alt={index < rating ? "Coral Star" : "Grey Star"}
          className="star"
        />
      ))}
    </div>
  );
}


export default Rating;