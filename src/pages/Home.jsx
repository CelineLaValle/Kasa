import '../styles/Home.css'
import Card from '../components/Card'
import Banner from '../components/Banner.jsx'
import imageKasa from '../assets/image-kasa.jpg';

function Home() {


  return (
  <> 
    <Banner 
    title="Chez vous, partout et ailleurs"
    img={imageKasa}
    opacity={0.6}
    /> 
    <div className='home'>
        <Card />
    </div>
  </>
  )
}

export default Home
