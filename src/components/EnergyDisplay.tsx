import React from 'react';
import Icon from './Icon';
import { useStore } from '../store';

const EnergyDisplay: React.FC = () => {
  const energy = useStore(state => state.energy);

  return (
    <div className='flex items-center'>
      <Icon type={IconType.ENERGY} />
      <span className='ml-2'>{energy}</span>
    </div>
  );
};

export default EnergyDisplay;