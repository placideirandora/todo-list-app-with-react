import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as adapter from '../config/enzyme.config';
import Home from '../../src/components/Home';

describe('Home Component Test Cases', () => {
  it('should render the component without any failure', () => {
    const component = shallow(<Home />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
