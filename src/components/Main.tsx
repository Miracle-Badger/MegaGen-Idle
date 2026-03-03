// src/components/Main.tsx
import React from 'react';
import { useIdleLoop } from '../utils/idleEngine';

const Main: React.FC = () => {
  useIdleLoop();

  return (
    <div className="p-4">
      <h1>MegaGen Idle</h1>
      {/* Game UI elements go here */}
    </div>
  );
};

export default Main;