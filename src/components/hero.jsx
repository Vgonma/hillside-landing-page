import React from 'react';
import photo from '../assets/images/photos/IMG_0073.jpg';

function Hero() {
  return (
    <div className='home-section hero'>
      <div className='hero-title-container'>
        <div>
          <h1 className='hero-title'>at HilLsiDe wE...</h1>
          <h1>LeaRn!</h1>
        </div>
      </div>
      <div className='hero-image-container left-squiggly'>
        <img src={photo} alt='playground' />
      </div>
    </div>
  );
}

export default Hero;
