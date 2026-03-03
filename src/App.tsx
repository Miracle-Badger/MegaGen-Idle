import React, { useEffect } from 'react';
import EnergyDisplay from './components/EnergyDisplay';
import useIdleLoop from '../utils/idleEngine';

const App = () => {
  useEffect(() => {
    useIdleLoop();
  }, []);

  return <EnergyDisplay />;
};

export default App;