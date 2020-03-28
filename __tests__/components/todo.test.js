import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as adapter from '../config/enzyme.config';
import {
  Todo,
  mapStateToProps,
  mapDispatchToProps
} from '../../src/components/Todo';

const posProps = {
  todos: [
    { id: 1, payload: 'Read Books', type: 'ADD_TODO' },
    { id: 2, payload: 'Watch Movies', type: 'ADD_TODO' },
    { id: 3, payload: 'Play Games', type: 'ADD_TODO' }
  ],
  removeTodo: jest.fn()
};

const negProps = {
  todos: []
};

describe('Todo Component Test Cases - Positive - No Store', () => {
  const component = shallow(<Todo {...posProps} />);

  it('should find all todos', () => {
    const todos = component.find('p').length;

    expect(todos).toEqual(3);
  });

  it('should complete the first todo', () => {
    const todos = component.find('p').length;
    const completeButton = component.find('button').at(0);

    completeButton.simulate('click');

    expect(completeButton.exists()).toBeTruthy();
  });
});

describe('Todo Component Test Cases - Negative - No Store', () => {
  const component = shallow(<Todo {...negProps} />);

  it('should indicate that there are no todos', () => {
    const todos = component.find('p').length;

    expect(todos).toEqual(1);
  });
});

describe('Todo Component Test Cases - mapStateToProps & mapDispatchToProps', () => {
  it('should pass the state to the mapStateToProps function', () => {
    const initialState = {
      todos: [
        { id: 1, payload: 'Read Books', type: 'ADD_TODO' },
        { id: 2, payload: 'Watch Movies', type: 'ADD_TODO' },
        { id: 3, payload: 'Play Games', type: 'ADD_TODO' }
      ]
    };

    expect(mapStateToProps(initialState).todos.length).toEqual(3);
  });

  it('should remove the todo when complete button is clicked', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).removeTodo(1);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'REMOVE_TODO',
      payload: 1
    });
  });
});
