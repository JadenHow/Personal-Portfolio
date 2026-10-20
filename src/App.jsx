import React from 'react';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Resume from 'components/resume/Resume';
import ProductList from './components/productList/ProductList';
import Timeline from 'components/timeline/Timeline';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { WindowSizeProvider } from 'contexts/WindowSizeContext';

const App = () => {
  return (
    <main>
      <WindowSizeProvider>
        <Toggle/>
        <Intro/>
        <About/>
        <Resume/>
        <ProductList/>
        <Timeline/>
        <Contact/>
      </WindowSizeProvider>
    </main>
  );
};

export default App;
