import create from 'zustand';
import { persist } from 'zustand/middleware';

interface Resources {
  coal: number;
  stone: number;
  metal: number;
  naturalGas: number;
}

export const useStore = create(
  persist(
    (set) => ({
      energy: 0,
      resources: { coal: 0, stone: 0, metal: 0, naturalGas: 0 } as Resources,
      researchLevel: 1,
      activeGenerators: [],
      roomCapacity: 10,
      roomUsed: 0,
    }),
    {
      name: 'game-state',
    }
  )
);
