export enum IconType {
  energy_currency_icon_32.png = 'energy_currency_icon_32.png',
}

interface Resources {
  coal: number;
  stone: number;
  metal: number;
  naturalGas: number;
}

export interface GameState {
  energy: number;
  resources: Resources;
  researchLevel: number;
  activeGenerators: string[];
  roomCapacity: number;
  roomUsed: number;
}
