import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './three';
import ModalCore from './components/ModalCore';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  // const [modalState, setModalState] = useState({
  //   isOpen: false,
  //   content: null
  // });

  return (
    <div id="three-canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <Scene modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            modalContent={modalContent}
            setModalContent={setModalContent} />
        </Suspense>
      </Canvas>
      < ModalCore modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalContent={modalContent}
        setModalContent={setModalContent} />
    </div>
  );
};

export default App;
