import create from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  energy: number;
  resources: { [key: string]: number };
  researchLevel: number;
  activeGenerators: any[];
  roomCapacity: number;
  roomUsed: number;
}

const useStore = create<persist<GameState>>(
  persist(
    (set) => ({
      energy: 0,
      resources: { coal: 0, stone: 0, metal: 0, naturalGas: 0 },
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

export default useStore;