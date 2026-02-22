import React from 'react';
import { useStore } from '../store';

const ResourceDisplay: React.FC = () => {
  const resources = useStore((state) => state.resources);

  return (
    <div className='text-2xl font-bold'>Resources:
      <ul>
        <li>Coal: {resources.coal}</li>
        <li>Stone: {resources.stone}</li>
        <li>Metal: {resources.metal}</li>
        <li>Natural Gas: {resources.naturalGas}</li>
      </ul>
    </div>
  );
};

export default ResourceDisplay;
