import { IconType } from './types';

export const Icon = ({ type }: { type: IconType }) => {
  return (
    <img
      src={new URL(`../assets/sprites/resources/${type}`, import.meta.url).href}
      alt={type}
      className="w-8 h-8"
    />
  );
};