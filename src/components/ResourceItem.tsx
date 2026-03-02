import React from 'react';

const ResourceItem = ({ resource, amount }) => {
  return (
    <div className='flex items-center'>
      <img src={`/assets/sprites/${resource}_icon_32.png`} alt={resource} width={32} height={32} />
      <span className='ml-2'>{amount}</span>
    </div>
  );
};

export default ResourceItem;