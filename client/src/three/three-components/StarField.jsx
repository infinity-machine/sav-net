import { useEffect, useState } from 'react';
import randomizedPositions from '../util/randomizedPositions';

const StarField = () => {
  const [starPositions, setStarPositions] = useState([]);
  useEffect(() => {
    setStarPositions(randomizedPositions(3000));
  }, []);

  return (
    <>
      {
        starPositions.map((position, index) => {
          return (
            <mesh position={position} key={index}>
              <sphereGeometry attach='geometry' args={[.1]} />
              <meshBasicMaterial attach='material' color='white' />
            </mesh>
          );
        })
      }
    </>
  );
};

export default StarField;