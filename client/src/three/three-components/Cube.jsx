import React from 'react'

const Cube = () => {
    const handleClick = (e) => {
        console.log(e.faceIndex)
    }
    return (
        <mesh onClick={handleClick} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
            <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>
    )
}

export default Cube