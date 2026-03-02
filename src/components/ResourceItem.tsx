import { useStore } from '../store';

const ResourceItem = ({ resource }: { resource: 'coal' | 'stone' | 'metal' | 'naturalGas' }) => {
  const amount = useStore((state) => state.resources[resource]);

  return (
    <div>
      <Icon type={`${resource}_icon_32.png`} />
      <span>{amount}</span>
    </div>
  );
};

export default ResourceItem;