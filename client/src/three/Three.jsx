import React from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Star, Cube } from '../three'
import starPositions from './util/starPositions';

const Three = () => {
  return (
    <>
      {
        starPositions().map((position, index) => {
          return (
            <mesh position={position} key={index}>
              < Star />
            </mesh>
          );
        })
      }
      <PerspectiveCamera makeDefault position={[0, 0, 60]} />
      < OrbitControls />
      < ambientLight intensity={.7} />
      < directionalLight position={[3, 5, 5]} angle={0.4} castShadow={true} />
      <Cube />
    </>
  )
}

export default Three