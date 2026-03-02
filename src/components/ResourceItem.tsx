import React from 'react';
import Icon from './Icon';
import { useStore } from '../store';

interface ResourceItemProps {
  resource: keyof typeof useStore.getState()['resources'];
}

const ResourceItem: React.FC<ResourceItemProps> = ({ resource }) => {
  const quantity = useStore(state => state.resources[resource]);

  return (
    <div className='flex items-center'>
      <Icon type={IconType.RESOURCE} />
      <span className='ml-2'>{quantity}</span>
    </div>
  );
};

export default ResourceItem;