import create from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  energy: number;
  resources: { coal: number; stone: number; metal: number; naturalGas: number };
  researchLevel: number;
  activeGenerators: Array<{ id: string; energyOutput: number }>;
  roomCapacity: number;
  roomUsed: number;
  lastSavedTimestamp: number;
}

export const useStore = create<GameState>()(
  persist((set, get) => ({
    energy: 0,
    resources: { coal: 0, stone: 0, metal: 0, naturalGas: 0 },
    researchLevel: 1,
    activeGenerators: [],
    roomCapacity: 10,
    roomUsed: 0,
    lastSavedTimestamp: Date.now(),
    applyIdleGains: (deltaTime: number) => {
      const totalEnergyPerSecond = get().activeGenerators.reduce((acc, generator) => acc + generator.energyOutput, 0);
      set(state => ({ energy: state.energy + totalEnergyPerSecond * deltaTime }));
    },
  }), 'gameState')
);
