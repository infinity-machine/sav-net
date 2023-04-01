const returnCubeSide = (faceIndex) => {
    if(faceIndex === 0 || faceIndex === 1) return 1;
    if(faceIndex === 2 || faceIndex === 3) return 2;
    if(faceIndex === 4 || faceIndex === 5) return 3;
    if(faceIndex === 6 || faceIndex === 7) return 4;
    if(faceIndex === 8 || faceIndex === 9) return 5;
    if(faceIndex === 10 || faceIndex === 11) return 6;
}

const modalContent = (faceIndex) => {
    console.log(returnCubeSide(faceIndex));
};

export default modalContent;