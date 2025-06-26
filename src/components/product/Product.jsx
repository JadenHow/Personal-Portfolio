import React from 'react';
import { useWindowSize } from 'contexts/WindowSizeContext';

const Product = ({ img, link, title }) => {
  const { isXSmall, isSmall, isMedium, isLarge } = useWindowSize();

  const isMobile = isXSmall || isSmall;
  const isTablet = isMedium || isLarge;

  const containerStyle = {
    width: isMobile || isTablet ? '85%' : '30%',
    minWidth: isMobile ? '280px' : '300px',
    height: 'fit-content',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  };

  const topStyle = {
    padding: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: isMobile ? '0.95rem' : '1.05rem'
  };

  const bottomStyle = {
    width: '100%',
    position: 'relative'
  };

  const browserStyle = {
    height: '1.25rem',
    backgroundColor: 'rgb(243, 242, 242)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.5rem',
    gap: '0.375rem',
    borderRadius: '0.75rem 0.75rem 0 0'
  };

  const circleStyle = {
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '50%',
    backgroundColor: 'white'
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    display: 'block'
  };

  return (
    <div style={containerStyle}>
      <div style={topStyle}>
        <h3 style={titleStyle}>{title}</h3>
      </div>

      <div style={bottomStyle}>
        <div style={browserStyle}>
          <div style={circleStyle}></div>
          <div style={circleStyle}></div>
          <div style={circleStyle}></div>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt={title} style={imageStyle} />
        </a>
      </div>
    </div>
  );
};

export default Product;
