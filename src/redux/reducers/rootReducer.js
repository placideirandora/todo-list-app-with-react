const initialState = {
  todos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      action.id = Math.floor(Math.random() * 1000);

      return {
        todos: [...state.todos, action]
      };

    case 'REMOVE_TODO':
      const currentTodos = state.todos.filter(todo => {
        return action.payload !== todo.id;
      });

      return {
        ...state,
        todos: currentTodos
      };

    default:
      return state;
  }
};

export default rootReducer;
