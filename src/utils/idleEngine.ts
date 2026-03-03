import { useStore } from '../store';

export const useIdleEngine = () => {
  useEffect(() => {
    const store = useStore.getState();
    const lastSavedTimestamp = store.lastSavedTimestamp;
    let offlineSeconds = (Date.now() - lastSavedTimestamp) / 1000;
    store.applyIdleGains(offlineSeconds);

    const intervalId = setInterval(() => {
      store.applyIdleGains(1);
      store.setState({ lastSavedTimestamp: Date.now() });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
};
