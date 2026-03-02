import { useStore } from '../store';

const EnergyDisplay = () => {
  const energy = useStore((state) => state.energy);

  return (
    <div>
      <Icon type='energy_currency_icon_32.png' />
      <span>{energy}</span>
    </div>
  );
};

export default EnergyDisplay;