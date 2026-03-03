import { useEffect, useRef } from 'react';
import { useStore } from '../store';

const applyIdleGains = (deltaTime: number) => {
  const store = useStore.getState();
  const newEnergy = deltaTime * 1; // Assuming each second generates 1 unit of energy
  useStore.setState((state) => ({ energy: state.energy + newEnergy }));
};

export const useIdleEngine = () => {
  const lastSavedTimestampRef = useRef<number>(Date.now());
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const offlineTime = (Date.now() - lastSavedTimestampRef.current) / 1000;
    applyIdleGains(offlineTime);

    const intervalId = setInterval(() => {
      applyIdleGains(1);
    }, 1000);

    intervalIdRef.current = intervalId;

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);
};