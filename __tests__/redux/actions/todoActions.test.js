import configureStore from 'redux-mock-store';
import * as todoActions from '../../../src/redux/actions/todoActions';

const mockStore = configureStore();
const store = mockStore();

describe('Todo Action Test Cases', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should dispatch the correct action and payload for adding a todo', () => {
    store.dispatch(todoActions.addTodo('Read Books'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should dispatch the correct action and payload for completing a todo', () => {
    store.dispatch(todoActions.removeTodo(1));
    expect(store.getActions()).toMatchSnapshot();
  });
});
