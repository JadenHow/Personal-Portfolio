import React, { createContext, useEffect, useReducer, useRef } from 'react';

export const ThemeContext = createContext();

// public/index.html sets data-theme before React mounts (saved choice or
// system preference), so start from whatever it decided.
const INITIAL_STATE = { darkMode: document.documentElement.dataset.theme === 'dark' };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const theme = state.darkMode ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    // Only remember an explicit choice, so visitors keep following their system theme until they toggle.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
