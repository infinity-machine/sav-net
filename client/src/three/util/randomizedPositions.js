import * as THREE from 'three';

const randomizedPositions = (number_of) => {
    let positions = [];
    for (let i = 0; i < number_of; i++) {
        const vector = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        positions[i] = vector;
    };
    return positions;
};

export default randomizedPositions;