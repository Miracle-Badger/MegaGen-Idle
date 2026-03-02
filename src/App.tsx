import React from 'react';
import EnergyDisplay from './components/EnergyDisplay';
import ResourceItem from './components/ResourceItem';

const App = () => {
  return (
    <div className="p-4">
      <h1>MegaGen Idle</h1>
      <EnergyDisplay />
      <ResourceItem resource="coal" />
      <ResourceItem resource="stone" />
      <ResourceItem resource="metal" />
      <ResourceItem resource="naturalGas" />
    </div>
  );
};

export default App;