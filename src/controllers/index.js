import * as models from './../models';

export const permutation = (state, row, type) => {
  let currentValues = [];
  let nextValues = [];
  let newState = state;
  for (let i = 0; i < models[type].length; i++) {
    if (i === 0) {
      const lastIndex = models[type][models[type].length - 1];
      nextValues = [newState[models[type][i]][models[row][0]], newState[models[type][i]][models[row][1]], newState[models[type][i]][models[row][2]]];
      const lastValue = [newState[lastIndex][models[row][0]], newState[lastIndex][models[row][1]], newState[lastIndex][models[row][2]]];
      newState[models[type][i]][models[row][0]] = lastValue[0];
      newState[models[type][i]][models[row][1]] = lastValue[1];
      newState[models[type][i]][models[row][2]] = lastValue[2];
    } else {
      currentValues = [newState[models[type][i]][models[row][0]], newState[models[type][i]][models[row][1]], newState[models[type][i]][models[row][2]]];
      newState[models[type][i]][models[row][0]] = nextValues[0];
      newState[models[type][i]][models[row][1]] = nextValues[1];
      newState[models[type][i]][models[row][2]] = nextValues[2];
      nextValues = currentValues;
    }
  }

  return state;
}

export const randomMove = (state, moves) => {
  for(let i=0; i < moves; i++) {
    const randRow = ['row1', 'row2', 'row3', 'col1', 'col1', 'col1'][Math.floor(Math.random() * 6)];
    const type = /row/gi.test(randRow) ? 'rowMove' : 'colMove';
    state = permutation(state, randRow, type)
  }

  return state;
}