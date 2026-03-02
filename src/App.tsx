import React from 'react';
import EnergyDisplay from './components/EnergyDisplay';

const App: React.FC = () => {
  return (
    <div className='p-4'>
      <h1>MegaGen Idle</h1>
      <EnergyDisplay />
    </div>
  );
};

export default App;