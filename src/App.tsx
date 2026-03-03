import React from 'react';
import EnergyDisplay from './components/EnergyDisplay';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <EnergyDisplay />
    </div>
  );
};

export default App;