import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  energy: number;
  lastSavedTimestamp: number;
  activeGenerators: Array<{ id: string; energyOutput: number }>
}

export const useStore = create<GameState>()(
  persist((set, get) => ({
    energy: 0,
    lastSavedTimestamp: Date.now(),
    activeGenerators: [],
  }), { name: 'megagen-state' })
);
