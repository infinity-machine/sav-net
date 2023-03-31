import React from 'react'
import * as THREE from 'three'

const Cube = () => {
    const texture = new THREE.TextureLoader().load('textures/tri_pattern.jpg');

    const handleClick = (e) => {
        console.log(e.faceIndex)
    }
    return (
        <mesh onClick={handleClick} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
            <meshLambertMaterial attach="material" color="lightblue" map={texture}/>
        </mesh>
    )
}

export default Cube