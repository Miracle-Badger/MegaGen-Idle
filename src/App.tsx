import React from 'react';
import { useIdleEngine } from './utils/idleEngine';
import EnergyDisplay from './components/EnergyDisplay';

const App = () => {
  useIdleEngine();

  return (
    <div>
      <h1>MegaGen Idle</h1>
      <EnergyDisplay />
    </div>
  );
};

export default App;
