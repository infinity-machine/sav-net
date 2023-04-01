import { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import modalContent from '../util/modalUtil';
import gsap from 'gsap';

const Cube = (props) => {
    const cubeRef = useRef(null);

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

    const ModalToggle = () => {
        if (!!props.setModalOpen) props.setModalOpen(true);
        if (!props.setModalOpen) props.setModalOpen(false);
    }

    const doSpin = () => {
        if (!!cubeRef.current) {
            const timeline = gsap.timeline({ paused: true });
            timeline.to(cubeRef.current.rotation, {
                y: cubeRef.current.rotation.y + Math.PI * 4,
                duration: .5,
                ease: 'none'
            },0);
            console.log(cubeRef.current.scale)
            timeline.to(cubeRef.current.scale, {
                x: .5,
                y: .5,
                z: .5,
                duration: .25,
                ease: 'none'
            }, 0);
            timeline.to(cubeRef.current.scale, {
                x: cubeRef.current.scale.x,
                y: cubeRef.current.scale.y,
                z: cubeRef.current.scale.z,
                duration: .25,
                ease: 'none'
            }, .25);
            timeline.play();
        };
    };

    const handleClick = (e) => {
        const contentSelection = modalContent(e.faceIndex);
        props.setModalContent(contentSelection);
        ModalToggle();
        doSpin();
    };

    const cubeSpintro = () => {
        if (!!cubeRef.current) {
            const timeline = gsap.timeline({ paused: true });
            timeline.to(cubeRef.current.rotation, {
                y: cubeRef.current.rotation.y + Math.PI * 6,
                duration: 1,
                ease: 'none'
            }, 0);
            timeline.to(cubeRef.current.scale, {
                x: 2000,
                y: 2000,
                z: 2000,
                duration: 1,
                ease: 'none'
            }, 0);
            timeline.play();
        };
    };

    useEffect(() => {
        cubeSpintro();
    }, []);

    return (
        <mesh ref={cubeRef} 
        onClick={handleClick} 
        position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[.01, .01, .01]} />
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