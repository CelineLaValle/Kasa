import '../styles/Banner.css'
import imageKasa from '../assets/image-kasa.jpg';

function Banner() {
    return (
        <div className="bannerContainer">
            <h2 className="titleBanner">Chez vous, partout et ailleurs</h2>
            <img className="banner" src={imageKasa} alt="banner" />
            <div className="bannerBackground"></div>
       </div>
    )
}

export default Banner