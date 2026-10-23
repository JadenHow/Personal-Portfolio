import React from 'react';
import { useWindowSize } from 'contexts/WindowSizeContext';

const Product = ({ icon: Icon, gradient, tagline, link, title }) => {
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
    backgroundColor: 'var(--surface-muted)',
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
    backgroundColor: 'var(--bg)'
  };

  const coverStyle = {
    width: '100%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    color: 'white',
    textDecoration: 'none',
    background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`
  };

  const iconStyle = {
    fontSize: '4rem',
    opacity: 0.9
  };

  const taglineStyle = {
    fontSize: '0.9rem',
    fontWeight: 500,
    opacity: 0.85
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

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={coverStyle}
          aria-label={`${title} on GitHub`}
        >
          <Icon style={iconStyle} aria-hidden="true" />
          <span style={taglineStyle}>{tagline}</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
