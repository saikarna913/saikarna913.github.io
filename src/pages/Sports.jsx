import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTheme } from '@mui/material/styles';

const customArrowStyle = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  zIndex: 2,
};

const customArrowHoverStyle = {
  color: 'gray',
};

const Sports = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const customArrowPrevStyle = {
    ...customArrowStyle,
    left: '10px',
    color: isDarkMode ? 'white' : 'black',
  };

  const customArrowNextStyle = {
    ...customArrowStyle,
    right: '10px',
    color: isDarkMode ? 'white' : 'black',
  };

  const customArrow = (onClickHandler, hasNext, label, style) => (
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        style={style}
        onMouseEnter={(e) => e.currentTarget.style.color = customArrowHoverStyle.color}
        onMouseLeave={(e) => e.currentTarget.style.color = style.color}
        aria-label={label}
      >
        {label === 'previous' ? '❮' : '❯'}
      </button>
    )
  );

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px', 
      textAlign: 'center',
      backgroundColor: isDarkMode ? '#121212' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
    }}>
      <h1>Inter IIT Aquatics Game</h1>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        renderArrowPrev={(onClickHandler, hasPrev, label) => customArrow(onClickHandler, hasPrev, 'previous', customArrowPrevStyle)}
        renderArrowNext={(onClickHandler, hasNext, label) => customArrow(onClickHandler, hasNext, 'next', customArrowNextStyle)}
      >
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
