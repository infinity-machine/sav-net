import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import gsap from 'gsap';

const Cube = (props) => {
    const cubeRef = useRef(null);
    const texture = useLoader(TextureLoader, 'textures/tri_pattern.jpg');

    const doSpin = () => {
        if(!!cubeRef.current) {
            const timeline = gsap.timeline({ paused: true });
            timeline.to(cubeRef.current.rotation, {
                y: cubeRef.current.rotation.y + Math.PI * 2,
                duration: 1,
                ease: 'none'
            });
            timeline.play();
        };
    };
 
    const handleClick = (e) => {
        doSpin()
        console.log(e.face)
        if(!!props.setModalOpen) props.setModalOpen(true);
        if(!props.setModalOpen) props.setModalOpen(false);
    };

    return (
        <mesh ref={cubeRef} onClick={handleClick} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
            <meshLambertMaterial attach="material" map={texture}/>
        </mesh>
    );
};

export default Cube;