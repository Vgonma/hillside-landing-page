import React, {useState, useEffect} from 'react';
import play from '../assets/images/photos/hillside_play.jpg';
import grow from '../assets/images/photos/hillside_grow.jpeg';
import learn from '../assets/images/photos/hillside_learn.jpg';

function Hero() {
  const [image, setImage] = useState(0);
  const wordList = ['LeaRn!', 'PlaY!', 'GrOw!'];
  const imageList = [learn, play, grow];

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((image + 1) % 3);
    }, 4000);
  
    return () => {
      clearInterval(interval);
    }
  }, [image])

  return (
    <div className='home-section hero'>
      <div className='hero-title-container'>
        <div>
          <h1 className='hero-title'>at HilLsiDe wE...</h1>
          <h1 className=''>{wordList[image]}</h1>
        </div>
      </div>
      <div className='hero-image-container left-squiggly'>
        <img src={imageList[image]} alt='playground' />
      </div>
    </div>
  );
}

export default Hero;
