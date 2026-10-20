import React from 'react';

const badgeStyle = {
  display: 'inline-block',
  backgroundColor: 'var(--surface-muted)',
  color: 'var(--text)',
  borderRadius: '8px',
  padding: '2px 8px',
  fontSize: '12px',
  marginRight: '5px',
  marginBottom: '5px'
};

const Badge = ({ text }) => <span style={badgeStyle}>{text}</span>;

export default Badge;
