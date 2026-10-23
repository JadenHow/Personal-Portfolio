import React from 'react';
import { Strong } from './styles';

// Renders a string from data.js, bolding any **wrapped** phrases.
const Highlight = ({ text }) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? <Strong key={i}>{part}</Strong> : part
    )}
  </>
);

export default Highlight;
