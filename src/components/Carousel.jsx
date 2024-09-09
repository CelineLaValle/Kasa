import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import { useState } from 'react'
import PropTypes from 'prop-types';
import '../styles/Carousel.css'



function Carousel({ arrayPictures }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleClick = (arrow) => {

        if (arrow === 'left') {
            let updatedIndex = currentSlideIndex - 1;
            if (updatedIndex < 0) {
                updatedIndex = updatedIndex + arrayPictures.length;
            }
            setCurrentSlideIndex(updatedIndex);
        } else if (arrow === 'right') {
            let updatedIndex = currentSlideIndex + 1;
            if (updatedIndex >= arrayPictures.length) {
                updatedIndex = updatedIndex - arrayPictures.length;
            }
            setCurrentSlideIndex(updatedIndex);
        }
    }


    return (
        <div className="arrow">
           <button> <img src={arrowLeft} onClick={() => handleClick('left')} alt="Arrow left" className="arrow_left" /></button>
            <button><img src={arrowRight} onClick={() => handleClick('right')} alt="Arrow right" className="arrow_right" /></button>
            <img src={arrayPictures[currentSlideIndex]} alt="Carousel" className="slide" />
        </div>
);
}

// Validation des props

Carousel.propTypes = {
    arrayPictures: PropTypes.array.isRequired
  };

export default Carousel;