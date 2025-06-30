import React from 'react';
import Product from '../product/Product';
import { products } from '../../data';
import { useWindowSize } from 'contexts/WindowSizeContext';

const ProductList = () => {
  const { isXSmall, isSmall, isMedium, isLarge } = useWindowSize();

  const isMobile = isXSmall || isSmall;
  const isTablet = isMedium || isLarge;

  const containerStyle = {
    padding: isMobile || isTablet ? '2rem 3rem' : '3rem 6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    textAlign: 'center'
  };

  const textContainerStyle = {
    maxWidth: '900px',
    width: '100%'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '1rem'
  };

  const descStyle = {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    marginBottom: '1rem'
  };

  const productListStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isMobile || isTablet ? 'center' : 'space-between',
    gap: '1.5rem'
  };

  const linkedinImgStyle = {
    width: isMobile ? '20%' : '10%',
    height: 'auto',
    paddingTop: isMobile ? '1rem' : '0'
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Projects</h1>

        {!isMobile && (
          <>
            <p style={descStyle}>
              Here are some projects that I&apos;ve worked on and am currently working on!
            </p>
            <p style={descStyle}>
              More description on my LinkedIn page, please check it out!
            </p>
          </>
        )}
      </div>

      <a href="https://www.linkedin.com/in/jaden-how02/" target="_blank" rel="noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          style={linkedinImgStyle}
        />
      </a>

      <div style={productListStyle}>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
