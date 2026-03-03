import React from 'react';
import { useStore } from '../store';

const EnergyDisplay = () => {
  const energy = useStore((state) => state.energy);

  return (
    <div>
      <h1>Energy: {energy}</h1>
    </div>
  );
};

export default EnergyDisplay;
