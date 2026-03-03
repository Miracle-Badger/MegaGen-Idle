import { useEffect } from 'react';

export const useIdleEngine = () => {
  const { applyIdleGains, lastSavedTimestamp } = useStore.getState();
  useEffect(() => {
    const secondsPassed = (Date.now() - lastSavedTimestamp) / 1000;
    applyIdleGains(secondsPassed);
    const intervalId = setInterval(() => {
      applyIdleGains(1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [applyIdleGains, lastSavedTimestamp]);
};
