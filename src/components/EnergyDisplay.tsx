import React from 'react';
import { useStore } from '../store';
import Icon from './Icon';

const EnergyDisplay: React.FC = () => {
  const energy = useStore((state) => state.energy);

  return (
    <div className="flex items-center">
      <Icon type="energy_currency_icon_32.png" />
      <span>{energy}</span>
    </div>
  );
};

export default EnergyDisplay;