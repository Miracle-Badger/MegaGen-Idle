import create from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  energy: number;
  lastSavedTimestamp: number;
  totalProductionPerSecond: number;
  applyIdleGains: (delta: number) => void;
}

const useStore = create<GameState>()(
  persist(
    (set, get) => ({
      energy: 0,
      lastSavedTimestamp: Date.now(),
      totalProductionPerSecond: 1,
      applyIdleGains: (delta: number) => {
        const state = get();
        set({
          energy: state.energy + state.totalProductionPerSecond * delta,
          lastSavedTimestamp: Date.now()
        });
      }
    }),
    { name: 'game-state' }
  )
);

export const useStore;
