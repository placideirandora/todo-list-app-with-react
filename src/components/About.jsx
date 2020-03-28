import React, { Fragment } from 'react';
import { aboutStyles } from '../styles/about';
import completeSvg from '../assets/images/complete';
import Image from './shared/Image';

const About = () => {
  return (
    <Fragment>
      <section style={aboutStyles.aboutWrapper}>
        <Image source={completeSvg} />
        <p>
          A web application that helps you create todos and keeps track of them
        </p>
      </section>
    </Fragment>
  );
};

export default About;
