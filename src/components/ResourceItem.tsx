import React from 'react';
import { useStore } from '../store';

const ResourceItem = ({ resource }: { resource: string }) => {
  const amount = useStore((state) => state.resources[resource]);

  return (
    <div className="flex items-center">
      <span>{amount}</span>
      <span>{resource}</span>
    </div>
  );
};

export default ResourceItem;