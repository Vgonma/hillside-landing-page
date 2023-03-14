import React from 'react';
import image from '../assets/images/playground.jpeg';

function Hero() {
  return (
    <div className='home-section hero'>
      <div className='hero-title-container'>
        <div>
          <h1 className='hero-title'>at HilLsiDe wE...</h1>
          <h1>LeaRn!</h1>
        </div>
      </div>
      <div className='hero-image-container'>
        <img src={image} alt='playground' />
      </div>
    </div>
  );
}

export default Hero;
