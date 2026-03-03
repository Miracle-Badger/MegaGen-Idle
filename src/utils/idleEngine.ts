import { useEffect } from 'react';
import { useStore } from '../store';

export const useIdleEngine = () => {
  useEffect(() => {
    const state = useStore.getState();
    const lastSavedTimestamp = state.lastSavedTimestamp;
    const applyIdleGains = state.applyIdleGains;

    const offlineSeconds = (Date.now() - lastSavedTimestamp) / 1000;
    applyIdleGains(offlineSeconds);

    const intervalId = setInterval(() => {
      applyIdleGains(1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
};
