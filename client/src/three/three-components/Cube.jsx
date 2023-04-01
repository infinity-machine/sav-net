import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import gsap from 'gsap';

const Cube = (props) => {
    const cubeRef = useRef(null);
    // const texture = useLoader(TextureLoader, 'textures/tri_pattern.jpg');
    // const texture_1 = useLoader(TextureLoader, 'textures/oblong.png')
    // const texture_2 = useLoader(TextureLoader, 'textures/tri_pattern.jpg')
    // const texture_3 = useLoader(TextureLoader, 'textures/tri_pattern.jpg')
    // const texture_4 = useLoader(TextureLoader, 'textures/tri_pattern.jpg')
    // const texture_5 = useLoader(TextureLoader, 'textures/tri_pattern.jpg')
    // const texture_6 = useLoader(TextureLoader, 'textures/tri_pattern.jpg')

    const [
        texture_1, 
        texture_2, 
        texture_3, 
        texture_4, 
        texture_5, 
        texture_6
    ] = useLoader(TextureLoader, [
        'textures/numbers/numbers-1.png',
        'textures/numbers/numbers-2.png',
        'textures/numbers/numbers-3.png',
        'textures/numbers/numbers-4.png',
        'textures/numbers/numbers-5.png',
        'textures/numbers/numbers-6.png'
    ])

    const modalToggle = () => {
        if (!!props.setModalOpen) props.setModalOpen(true);
        if (!props.setModalOpen) props.setModalOpen(false);
    }

    const doSpin = () => {
        if (!!cubeRef.current) {
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
        // modalToggle();
        // doSpin();
        console.log(e.faceIndex);
    };

    return (
        <mesh ref={cubeRef} onClick={handleClick} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[20, 20, 20]} />
            <meshStandardMaterial attach="material-0" map={texture_1} />
            <meshStandardMaterial attach="material-1" map={texture_2} />
            <meshStandardMaterial attach="material-2" map={texture_3} />
            <meshStandardMaterial attach="material-3" map={texture_4} />
            <meshStandardMaterial attach="material-4" map={texture_5} />
            <meshStandardMaterial attach="material-5" map={texture_6} />
        </mesh>
    );
};

export default Cube;