import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './three';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div id="three-canvas-container">
      <Canvas>
      <Suspense fallback={null}>
        <Scene modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
