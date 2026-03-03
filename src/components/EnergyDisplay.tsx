import React, { useEffect, useState } from 'react';
import { useStore } from '../store';

const EnergyDisplay: React.FC = () => {
  const [energy, setEnergy] = useState<number>(0);

  useEffect(() => {
    const state = useStore.getState();
    setEnergy(state.energy);
  }, []);

  return (
    <div>
      <h2>Energy: {energy}</h2>
    </div>
  );
};

export default EnergyDisplay;
