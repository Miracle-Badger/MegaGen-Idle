import { useStore } from '../store';
import { Icon } from './Icon';

const ResourceItem = ({ resource }: { resource: keyof Resources }) => {
  const quantity = useStore((state) => state.resources[resource]);

  return (
    <div className="flex items-center">
      <Icon type={`${resource}.png`} />
      <span>{quantity}</span>
    </div>
  );
};

export default ResourceItem;