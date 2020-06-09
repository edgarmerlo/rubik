import { renderFaces, r } from "../models";
import { randomMove } from './../controllers';

const isLocal = JSON.parse(localStorage.getItem('rubikCube')) || false;
const initialState = {
  position: isLocal.position || randomMove(renderFaces(), 20),
  history: isLocal.history || [],
};

export const cubeReducer = function (state = initialState, action) {
  switch (action.type) {
    case "LEFT":
      localStorage.setItem('rubikCube', JSON.stringify({ position: action.payload.position, history: action.payload.history }));
      return { position: action.payload.position, history: action.payload.history }
    case "RIGHT":
      return { ...state }
    case "UP":
      localStorage.setItem('rubikCube', JSON.stringify({ position: action.payload.position, history: action.payload.history }));
      return { position: action.payload.position, history: action.payload.history }
    case "RESET":
      localStorage.removeItem('rubikCube')
      return { position: renderFaces(), history: [] };
    default:
      return state;
  }
};