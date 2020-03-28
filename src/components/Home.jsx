import React, { Fragment } from 'react';
import { homeStyles } from '../styles/home';
import todoSvg from '../assets/images/todo';
import Image from './shared/Image';

const Home = () => {
  return (
    <Fragment>
      <section style={homeStyles.homeWrapper}>
        <Image source={todoSvg} />
        <p>Manage your todos in an effective and efficient manner!</p>
      </section>
    </Fragment>
  );
};

export default Home;
