import React, { useEffect } from 'react';
import { useIdleEngine } from './utils/idleEngine';
import EnergyDisplay from './components/EnergyDisplay';

const App: React.FC = () => {
  useIdleEngine();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1>MegaGen Idle</h1>
      <EnergyDisplay />
    </div>
  );
};

export default App;
