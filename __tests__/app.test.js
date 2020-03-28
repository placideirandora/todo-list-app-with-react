import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as adapter from './config/enzyme.config';
import App from '../src/App';

describe('App Component Wrapper Test Case', () => {
  it('should render the component wrapper without any failure', () => {
    const component = shallow(<App />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
