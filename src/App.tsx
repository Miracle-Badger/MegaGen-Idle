import React from 'react';
import { useIdleEngine } from './utils/idleEngine';
import EnergyDisplay from './components/EnergyDisplay';

const App = () => {
  useIdleEngine();

  return (
    <>
      <EnergyDisplay />
      {/* Add other game UI components here */}
    </>
  );
};

export default App;
