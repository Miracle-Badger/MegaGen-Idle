import React from 'react';

const Icon = ({ type }: { type: string }) => {
  return <img src={new URL(`../assets/sprites/${type}`, import.meta.url).href} alt={type} />;
};

export default Icon;