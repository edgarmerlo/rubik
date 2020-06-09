import { permutation } from './../controllers'

export function moveLeft(row, position, history, movement) {
  const newState = permutation(position, row, 'rowMove');
    return {
      type: 'LEFT',
      payload: {
        position: [...newState],
        history: [...history, movement]
      },
    };
};

export function moveUp(row, position, history, movement) {
  const newState = permutation(position, row, 'colMove');
  
  return {
    type: 'UP',
    payload: {
      position: [...newState],
      history: [...history, movement]
    },
  };
};

export function reset() {

  return {
    type: 'RESET',
    payload: null,
  };
};