import React, { useState, useEffect } from 'react';
import SliderContent from './SliderContent.js';
import Dots from './Dots';
import "./slider.css";
import sliderImage from './sliderImage';

const len = sliderImage.length - 1;

function Slider() {
    const [activeIndex, setActiveIndex] = useState((0));

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex (activeIndex === len ? 0 : activeIndex + 1);
        }, 5000)
        return () => clearInterval(interval);
    }, [activeIndex])
    return (
        <div className='slide-container'>
            <SliderContent  activeIndex={activeIndex} sliderImage={sliderImage} setActiveIndex={setActiveIndex} len={len}/>
            <Dots
            activeIndex={activeIndex}
            sliderImage={sliderImage}
            onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
            
        </div>
    )
}

export default Slider;