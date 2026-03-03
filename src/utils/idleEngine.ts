import { useStore } from '../store';

export const useIdleLoop = () => {
  const applyIdleGains = useStore(state => state.applyIdleGains);
  const lastSavedTimestamp = useStore(state => state.lastSavedTimestamp);

  const offlineTime = (Date.now() - lastSavedTimestamp) / 1000;
  if (offlineTime > 0) {
    applyIdleGains(offlineTime);
  }
};