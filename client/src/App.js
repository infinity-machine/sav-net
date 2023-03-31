import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './three';
import ModalTest from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div id="three-canvas-container">
      <Canvas>
      <Suspense fallback={null}>
        <Scene modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      </Suspense>
      </Canvas>
      <ModalTest modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
};

export default App;
