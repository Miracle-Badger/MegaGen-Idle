import { useEffect } from 'react';
import { useStore } from '../store';

const useIdleEngine = () => {
  const applyIdleGains = useStore((state) => state.applyIdleGains);
  const lastSavedTimestamp = useStore((state) => state.lastSavedTimestamp);

  useEffect(() => {
    const secondsPassed = (Date.now() - lastSavedTimestamp) / 1000;
    applyIdleGains(secondsPassed);

    const intervalId = setInterval(() => {
      applyIdleGains(1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [applyIdleGains, lastSavedTimestamp]);
};

export const useIdleEngine;
