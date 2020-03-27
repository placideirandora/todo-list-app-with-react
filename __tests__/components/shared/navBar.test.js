import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as adapter from '../../config/enzyme.config';
import NavBar from '../../../src/components/shared/NavBar';

describe('NavBar Component Test Cases', () => {
  it('should render the component without any failure', () => {
    const component = shallow(<NavBar />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
