const cubeReducer = function (state = 0, action) {
  switch (action.type) {
    case "LEFT":
    case "RIGHT":
    default:
      return state;
  }
};