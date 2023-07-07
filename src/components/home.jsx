import React from 'react';
import Hero from './hero';
import AboutUs from './about-us';
import Program from './program';
import Activities from './activities';
import Footer from './footer';

function Home() {
  return (
    <div className='home'>
      <Hero />
      {/* <Activities /> */}
      <Footer />
    </div>
  );
}

export default Home;
