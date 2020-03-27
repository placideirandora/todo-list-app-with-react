import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as adapter from '../../config/enzyme.config';
import Footer from '../../../src/components/shared/Footer';

describe('Footer Component Test Cases', () => {
  it('should render the component without any failure', () => {
    const component = shallow(<Footer />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
