import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';



const Cube = (props) => {
    const cubeMap = useLoader(TextureLoader, 'textures/tri_pattern.jpg');

    const handleClick = (e) => {
        if(!!props.setModalOpen) props.setModalOpen(true);
        if(!props.setModalOpen) props.setModalOpen(false);
    };
    
    return (
        <mesh onClick={handleClick} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
            <meshLambertMaterial attach="material" map={cubeMap}/>
        </mesh>
    );
};

export default Cube;