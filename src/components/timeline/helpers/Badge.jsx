import React, { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';

const Badge = ({ text }) => {
  const { state: { darkMode } } = useContext(ThemeContext);

  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: darkMode ? '#333' : '#f4f4f4',
        color: darkMode ? '#f4f4f4' : '#333',
        borderRadius: '8px',
        padding: '2px 8px',
        fontSize: '12px',
        marginRight: '5px',
        marginBottom: '5px'
      }}
    >
      {text}
    </span>
  );
};

export default Badge;
