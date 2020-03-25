import React, { Fragment } from 'react';
import { aboutStyles } from '../styles/about';
import image from '../assets/images/complete';

const About = () => {
  return (
    <Fragment>
      <section style={aboutStyles.aboutWrapper}>
        <img src={image} alt="image" width="400" height="300" />
        <p>
          A web application that helps you create todos and keeps track of them
        </p>
      </section>
    </Fragment>
  );
};

export default About;
