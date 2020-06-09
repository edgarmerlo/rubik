export const renderFaces = () => {
  const cube = [
    Array(Math.pow(3, 2)).fill('#0f0'),
    Array(Math.pow(3, 2)).fill('#00f'),
    Array(Math.pow(3, 2)).fill('#fff'),
    Array(Math.pow(3, 2)).fill('#f00'),
    Array(Math.pow(3, 2)).fill('#440'),
    Array(Math.pow(3, 2)).fill('#000'),
  ];
  return cube;
}

const rowMove = [0,1,2,3];
const colMove = [1,3,4,5];

const row1 = [0, 1, 2];
const row2 = [3, 4, 5];
const row3 = [6, 7, 8];

const col1 = [0, 3, 6];
const col2 = [1, 4, 7];
const col3 = [2, 5, 8];
