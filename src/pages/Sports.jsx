import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Sports = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h1>Inter IIT Aquatics Game</h1>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/FssVlU6NgBc?start=8700"
            title="Inter IIT Aquatics Game"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/_QiqPFHGGTA?start=10920"
            title="Another Match"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Carousel>
      <p>Watch our Inter IIT Aquatics Games.</p>
    </div>
  );
};

export default Sports;
