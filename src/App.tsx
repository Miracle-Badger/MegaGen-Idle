import React from 'react';
import { useIdleEngine } from './utils/idleEngine';
import EnergyDisplay from './components/EnergyDisplay';

const App: React.FC = () => {
  useIdleEngine();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">MegaGen Idle</h1>
      <EnergyDisplay />
    </div>
  );
};

export default App;
