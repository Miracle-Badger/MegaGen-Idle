import create from 'zustand';

export const useStore = create((set) => ({
  energy: 0,
  resources: { coal: 0, stone: 0, metal: 0, naturalGas: 0 },
  researchLevel: 1,
  activeGenerators: [],
  roomCapacity: 10,
  roomUsed: 0,
}));