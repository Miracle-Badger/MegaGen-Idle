import React from 'react';
import { useStore } from '../store';

const EnergyDisplay = () => {
  const energy = useStore(state => state.energy);

  return <div>Energy: {energy}</div>;
};

export default EnergyDisplay;