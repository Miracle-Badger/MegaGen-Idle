import { GameState } from '../store';

export type GameState = {
  energy: number;
  lastSavedTimestamp: number;
  applyIdleGains: (deltaInSeconds: number) => void;
};
