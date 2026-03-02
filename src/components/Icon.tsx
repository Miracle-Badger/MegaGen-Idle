import React from 'react';

interface IconProps {
  type: string;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  return <img src={new URL(`../assets/sprites/${type}`, import.meta.url).href} alt={type} />;
};

export default Icon;