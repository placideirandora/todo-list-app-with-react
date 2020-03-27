import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as adapter from '../config/enzyme.config';
import About from '../../src/components/About';

describe('About Component Test Cases', () => {
  it('should render the component without any failure', () => {
    const component = shallow(<About />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
