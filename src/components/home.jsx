import React from 'react';
import image from '../assets/images/playground.jpeg';

function Home() {
  return (
    <div className='home'>
      <div className='home-title-container'>
        <h1 className='home-title'>AT HILLSIDE WE...</h1>
        <h1>LEARN!</h1>
      </div>
      <div className='home-image-container'>
        <img src={image} alt='playground' />
      </div>
    </div>
  );
}

export default Home;
