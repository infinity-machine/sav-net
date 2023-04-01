import { useEffect, useState } from 'react'
import Star from './Star';
import randomizedPositions from '../util/randomizedPositions';

const StarField = () => {
  const [starPositions, setStarPositions] = useState([]);
  useEffect(() => {
    setStarPositions(randomizedPositions(3000))
  }, []);

  return (
    <>
      {
        starPositions.map((position, index) => {
          return (
            <mesh position={position} key={index}>
              < Star />
            </mesh>
          );
        })
      }
    </>
  );
};

export default StarField;