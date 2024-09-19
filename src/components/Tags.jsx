import '../styles/Logements.css'
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';

function Tags() {
  const { id } = useParams();

  return (
    <div>
      {logements.map((annonce) => {
        if (id === annonce.id) {
          return (
            <div key={annonce.id}>
              {annonce.tags.map((tag, index) => (
                <span key={index} className="logementTag">{tag}</span>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Tags;



