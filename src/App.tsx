import React from 'react';
import EnergyDisplay from './components/EnergyDisplay';

const App = () => {
  return (
    <div className="p-4">
      <h1>MegaGen Idle</h1>
      <EnergyDisplay />
    </div>
  );
};

export default App;
