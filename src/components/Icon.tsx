import React from 'react';

export enum IconType {
  ENERGY = 'energy_currency_icon_32.png'
}

interface IconProps {
  type: IconType;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  return <img src={`/assets/sprites/resources/${type}`} alt={type} className='w-8 h-8' />;
};

export default Icon;