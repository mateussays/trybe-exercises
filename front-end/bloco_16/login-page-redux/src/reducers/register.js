const INITIAL_STATE = [];

function registerReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_REGISTER':
      return [...state, action.data];
      default:
        return state;
  }
}

export default registerReducer;