import rootReducer from '../../../src/redux/reducers/rootReducer';
import { ADD_TODO, REMOVE_TODO } from '../../../src/redux/actions/todoActions';

describe('Root Reducer Test Cases', () => {
  it('should return the default state that is empty', () => {
    const action = { type: 'DUMMY_ACTION' };

    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });

  it('should return the correct state while added a todo', () => {
    const firstAction = { type: ADD_TODO, payload: 'Read Books', id: 1 };
    const expectedState = {
      todos: [{ type: ADD_TODO, payload: 'Read Books', id: 1 }]
    };

    expect(rootReducer(undefined, firstAction)).toEqual(expectedState);
  });

  it('should return the correct state while removed a todo', () => {
    const firstAction = { type: REMOVE_TODO, id: 1 };
    const expectedState = {
      todos: []
    };

    expect(rootReducer(undefined, firstAction)).toEqual(expectedState);
  });
});
