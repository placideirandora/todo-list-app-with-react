import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as adapter from '../config/enzyme.config';
import { AddTodo, mapDispatchToProps } from '../../src/components/AddTodo';

const props = {
  addTodo: jest.fn()
};

describe('AddTodo Component Test Cases - Positive - No Store', () => {
  const component = shallow(<AddTodo {...props} />);

  it('should render the component and find the text field', () => {
    const textField = component.find('input').length;

    expect(textField).toEqual(1);
  });

  it('should type in and submit a todo', () => {
    let prevented = false;
    const textField = component.find('input');
    const textEvent = { target: { value: 'Read Books' } };

    const event = {
      preventDefault: () => {
        prevented = true;
      },
      target: {
        reset: jest.fn()
      }
    };

    textField.simulate('change', textEvent);
    component.find('form').simulate('submit', event);

    expect(component.state().content).toEqual('Read Books');
    expect(component.state().content).toEqual('Read Books');
  });
});

describe('AddTodo Component Test Cases - Negative - No Store', () => {
  const component = shallow(<AddTodo {...props} />);

  it('should render the component and find the text field', () => {
    const textField = component.find('input').length;

    expect(textField).toEqual(1);
  });

  it('should not allow to submit an empty todo', () => {
    let prevented = false;
    const textField = component.find('input');
    const textEvent = { target: { value: '' } };

    const alert = jest
      .spyOn(window, 'alert')
      .mockImplementation(() => 'Oops! You cannot add an empty todo!');

    const event = {
      preventDefault: () => {
        prevented = true;
      }
    };

    textField.simulate('change', textEvent);
    component.find('form').simulate('submit', event);

    expect(component.state().content).toEqual('');
    expect(component.state().content).toEqual('');
    expect(alert).toHaveBeenCalled();
  });
});

describe('Todo Component Test Cases - mapStateToProps & mapDispatchToProps', () => {
  it('should add a todo when add button is clicked', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).addTodo('Read Books');
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'ADD_TODO',
      payload: 'Read Books'
    });
  });
});
