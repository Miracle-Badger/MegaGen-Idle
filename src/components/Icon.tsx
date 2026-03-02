import { IconType } from '../types';

export const Icon = ({ type }: { type: IconType }) => {
  return <img src={new URL(`../assets/sprites/${type}`, import.meta.url).href} alt={type} />;
};