import rootReducer from '../../../src/redux/reducers/rootReducer';
import { ADD_TODO, REMOVE_TODO } from '../../../src/redux/actions/todoActions';

describe('Root Reducer Test Cases', () => {
  it('should return the default state that is empty', () => {
    const action = { type: 'DUMMY_ACTION' };

    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });

  it('should return the correct state while added a todo', () => {
    const action = { type: ADD_TODO, payload: 'Read Books', id: 1 };
    const expectedState = {
      todos: [{ type: ADD_TODO, payload: 'Read Books', id: 1 }]
    };

    expect(rootReducer(undefined, action)).toEqual(expectedState);
  });

  it('should return a defined state while added a todo without id', () => {
    const action = { type: ADD_TODO, payload: 'Make Video Games' };

    expect(rootReducer(undefined, action)).toBeDefined();
  });

  it('should return the correct state while removed a todo', () => {
    const state = {
      todos: [{ type: ADD_TODO, payload: 'Watch Movies', id: 1 }]
    };
    const action = { type: REMOVE_TODO, payload: 1 };
    const expectedState = {
      todos: []
    };

    expect(rootReducer(state, action)).toEqual(expectedState);
  });
});
