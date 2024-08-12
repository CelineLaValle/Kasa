import '../styles/Footer.css'
// import fondBanner from '../assets/fond-noir-banner.png';
import logoKasa from '../assets/logo-footer.svg';

function Footer() {
    return (
        <div className="footer">
            {/* <img className="fondBanner" src={fondBanner} alt="fondBanner" /> */}
            <img className="logoKasa" src={logoKasa} alt="logoKasa" />
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
       </div>
    )
}

export default Footer