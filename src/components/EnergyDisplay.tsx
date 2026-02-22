import React from 'react';
import { useStore } from '../store';

const EnergyDisplay: React.FC = () => {
  const energy = useStore((state) => state.energy);

  return (
    <div className='text-2xl font-bold'>Energy: {energy}</div>
  );
};

export default EnergyDisplay;
