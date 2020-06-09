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

export const rowMove = [0,1,2,3];
export const colMove = [1,3,4,5];

export const row1 = [0, 1, 2];
export const row2 = [3, 4, 5];
export const row3 = [6, 7, 8];

export const col1 = [0, 3, 6];
export const col2 = [1, 4, 7];
export const col3 = [2, 5, 8];
