import React, { Fragment } from 'react';
import { homeStyles } from '../styles/home';
import image from '../assets/images/todo';

const Home = () => {
  return (
    <Fragment>
      <section style={homeStyles.homeWrapper}>
        <img src={image} alt="image" width="400" height="300" />
        <p>Manage your todos in an effective and efficient manner!</p>
      </section>
    </Fragment>
  );
};

export default Home;
