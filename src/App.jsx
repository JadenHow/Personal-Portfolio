import React, { useContext } from 'react';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Resume from 'components/resume/Resume';
import ProductList from './components/productList/ProductList';
import Timeline from 'components/timeline/Timeline';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './contexts/ThemeContext';
import { WindowSizeProvider } from 'contexts/WindowSizeContext';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      backgroundColor: darkMode ? '#222' : 'white',
      color: darkMode && 'white'
    }}
    >
      <WindowSizeProvider>
        <Toggle/>
        <Intro/>
        <About/>
        <Resume/>
        <ProductList/>
        <Timeline/>
        <Contact/>
      </WindowSizeProvider>
    </div>
  );
};

export default App;
