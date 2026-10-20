import React, { createContext, useEffect, useReducer } from 'react';

export const ThemeContext = createContext();

const STORAGE_KEY = 'theme';

// public/index.html sets data-theme before React loads (from the saved choice
// or the OS preference), so the first paint already uses the right colours.
const getInitialState = () => ({
  darkMode: document.documentElement.dataset.theme === 'dark'
});

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, undefined, getInitialState);

  useEffect(() => {
    const theme = state.darkMode ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Storage can be unavailable (private mode); the theme still works for this visit.
    }
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
