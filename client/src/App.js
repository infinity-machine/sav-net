import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Three } from './three';

function App() {
  return (
    <div id="three-canvas-container">
      <Canvas>
        < Three />
      </Canvas>
    </div>
  );
};

export default App;
