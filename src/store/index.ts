import create from 'zustand';

export const useStore = create((set, get) => ({
  energy: 0,
  resources: { coal: 0, stone: 0, metal: 0, naturalGas: 0 },
  researchLevel: 1,
  activeGenerators: [],
  roomCapacity: 10,
  roomUsed: 0,
  lastSavedTimestamp: Date.now(),

  calculateEnergyPerSecond: () => {
    const { activeGenerators } = get();
    return activeGenerators.reduce((total, generator) => total + (generator.energyOutput || 0), 0);
  },

  applyIdleGains: (deltaTime) => {
    const energyPerSecond = get().calculateEnergyPerSecond();
    set(state => ({ energy: state.energy + energyPerSecond * deltaTime }));
  }
}));