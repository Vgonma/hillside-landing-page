import React from 'react';
import Hero from './hero';
import AboutUs from './about-us';
import Program from './program';
import Activities from './activities';

function Home() {
  return (
    <div className='home'>
      <Hero />
      <AboutUs />
      <Program />
      <Activities />
    </div>
  );
}

export default Home;
