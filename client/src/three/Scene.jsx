import React from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { StarField, Cube } from '../three';

const Scene = (props) => {
  return (
    <>
      < StarField />
      < PerspectiveCamera makeDefault
        position={[0, 0, 60]} />
      < OrbitControls />
      < ambientLight intensity={.7} />
      < directionalLight position={[3, 5, 5]}
        angle={0.4}
        castShadow={true} />
      < Cube modalOpen={props.modalOpen}
        setModalOpen={props.setModalOpen}
        modalContent={props.modalContent}
        setModalContent={props.setModalContent} />
    </>
  );
};

export default Scene;