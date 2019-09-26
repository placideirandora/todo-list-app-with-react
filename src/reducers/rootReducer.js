const initState = {
  todos: []
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'ADD_TODO') {
    action.id = Math.floor(Math.random() * 100);
    state.todos.push(action);
  }
  return state;
};

export default rootReducer;
