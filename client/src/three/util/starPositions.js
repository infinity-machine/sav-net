import * as THREE from 'three';

const starPositions = () => {
    let positions = [];
    for (let i = 0; i < 3000; i++) {
        const vector = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        positions[i] = vector
    };
    return positions;
};

export default starPositions;