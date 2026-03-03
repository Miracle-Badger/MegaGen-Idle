import create from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  energy: number;
  lastSavedTimestamp: number;
  applyIdleGains: (deltaInSeconds: number) => void;
}

const useStore = create<GameState>()(
  persist(
    (set, get) => ({
      energy: 0,
      lastSavedTimestamp: Date.now(),
      applyIdleGains: (deltaInSeconds: number) => {
        const state = get();
        set({
          energy: state.energy + state.totalProductionPerSecond * deltaInSeconds,
          lastSavedTimestamp: Date.now()
        });
      }
    }),
    { name: 'game-state' }
  )
);

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
