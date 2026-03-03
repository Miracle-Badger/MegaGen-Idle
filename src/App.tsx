import React, { useEffect } from 'react';
import { useIdleLoop } from './utils/idleEngine';

const App = () => {
  useIdleLoop();

  return (
    <div className='App'>
      {/* Game UI components go here */}
    </div>
  );
};

export default App;
