import React, { useContext } from 'react';
import './toggle.css';
import Sun from 'assets/sun.png';
import Moon from 'assets/moon.png';
import { ThemeContext } from 'contexts/ThemeContext';

const Toggle = () => {
  const { state: { darkMode }, dispatch } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="t"
      role="switch"
      aria-checked={darkMode}
      aria-label="Dark mode"
      onClick={() => dispatch({ type: 'TOGGLE' })}
    >
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <span className="t-button" style={{ left: darkMode ? 0 : 25 }}></span>
    </button>
  );
};

export default Toggle;
