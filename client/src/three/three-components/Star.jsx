import React from 'react'

const Star = () => {
    return (
        <mesh>
          <sphereBufferGeometry attach='geometry' args={[.1]} />
          <meshBasicMaterial attach='material' color='white' />
        </mesh>
      )
}

export default Star