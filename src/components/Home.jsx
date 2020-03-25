import React, { Fragment } from 'react';
import { homeStyles } from '../styles/home';

const Home = () => {
  return (
    <Fragment>
      <p style={homeStyles.paragraph}>
        Manage your todos in an effective and efficient manner!
      </p>
    </Fragment>
  );
};

export default Home;
