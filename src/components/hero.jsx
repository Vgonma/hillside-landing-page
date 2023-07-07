import React, {useState, useEffect} from 'react';
import hero1 from '../assets/images/photos/hero-1.jpeg';
import hero2 from '../assets/images/photos/hero-2.jpeg';
import hero3 from '../assets/images/photos/hero-3.jpg';
import hero4 from '../assets/images/photos/hero-4.jpg';
import hero5 from '../assets/images/photos/hero-5.jpg';

import skills4life from '../assets/images/titles/SKILLS-FOR-LIFE.svg';

function Hero() {
  const [image, setImage] = useState(0);
  const imageList = [hero1, hero2, hero3, hero4, hero5];

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image + 1) % 5);
    }, 2500);
  
    return () => {
      clearInterval(interval);
    }
  }, [image])

  return (
    <div className='home-section hero'>
      <div className='hero-title-container'>
          <img src={skills4life} alt="Skills for life" />
      </div>
      <div className='hero-image-container left-squiggly'>
        <img src={imageList[image]} alt='playground' />
      </div>
    </div>
  );
}

export default Hero;
