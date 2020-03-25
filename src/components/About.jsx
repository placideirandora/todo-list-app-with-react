import React, { Fragment } from 'react';
import { aboutStyles } from '../styles/about';

const About = () => {
  return (
    <Fragment>
      <p style={aboutStyles.paragraph}>
        A web application that helps you create todos and keeps track of them
      </p>
    </Fragment>
  );
};

export default About;
