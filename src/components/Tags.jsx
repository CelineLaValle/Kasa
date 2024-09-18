import '../styles/Logements.css'
import annonces from '../../data/logements.json'

function Tags({ tags }) {
    return (
        tags.map((item) => {
            if (id === item.id) {
                annonce = item; // Stocker l'annonce correspondante
                console.log(annonce);
            }
        })
    )
}


// {annonce.tags}

export default Tags;