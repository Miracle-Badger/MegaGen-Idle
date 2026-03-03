import React from 'react';
import { useIdleEngine } from '../utils/idleEngine';
import EnergyDisplay from './components/EnergyDisplay';

const App = () => {
  useIdleEngine();
  return (
    <div className="App">
      <EnergyDisplay />
    </div>
  );
};

export default App;
