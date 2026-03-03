// src/utils/idleEngine.ts
import { useEffect } from 'react';
import { useStore } from '../store';

const calculateEnergyPerSecond = () => {
  const store = useStore.getState();
  return store.activeGenerators.reduce((total, generator) => total + (generator.energyOutput || 0), 0);
};

const applyIdleGains = (deltaTime: number) => {
  const store = useStore.getState();
  const energyGain = calculateEnergyPerSecond() * deltaTime;
  useStore.setState((state) => ({ energy: state.energy + energyGain }));
};

const checkResourceDrain = () => {
  const store = useStore.getState();
  store.activeGenerators.forEach((generator) => {
    if (generator.resourceRequired && store.resources[generator.resourceRequired] === 0) {
      useStore.setState((state) => ({ activeGenerators: state.activeGenerators.filter(g => g !== generator) }));
    }
  });
};

export const useIdleLoop = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      applyIdleGains(1);
      checkResourceDrain();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
};
