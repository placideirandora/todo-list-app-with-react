import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as adapter from '../../config/enzyme.config';
import Image from '../../../src/components/shared/Image';

const props = {
  source: 'image location'
};

describe('Footer Component Test Cases', () => {
  it('should render the component without any failure', () => {
    const component = shallow(<Image {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
