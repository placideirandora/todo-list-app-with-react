const initState = {
  todos: []
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'ADD_TODO') {
    action.id = Math.floor(Math.random() * 100);
    state.todos.push(action);
  }
  if (action.type === 'DELETE_TODO') {
    const currentTodos = state.todos.filter(todo => {
      return action.id !== todo.id;
    });
    return {
      ...state,
      todos: currentTodos
    };
  }
  return state;
};

export default rootReducer;
