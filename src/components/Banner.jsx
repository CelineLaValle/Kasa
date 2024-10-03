import '../styles/Banner.css'

function Banner({title, img, opacity}) {
    return (
        <div className="bannerContainer">
            <h2 className="titleBanner">{title}</h2>
            <img className="banner" src={img} alt="banner" />
            <div className="bannerBackground" style={{opacity: opacity}}></div>
       </div>
    )
}

export default Banner



