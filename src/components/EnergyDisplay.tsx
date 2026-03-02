import React from 'react';
import { useStore } from '../store';
import Icon from './Icon';

const EnergyDisplay = () => {
  const energy = useStore((state) => state.energy);

  return (
    <div className="flex items-center">
      <Icon type={IconType.ENERGY} />
      <span>{energy}</span>
    </div>
  );
};

export default EnergyDisplay;