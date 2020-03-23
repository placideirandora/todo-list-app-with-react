import React, { Fragment } from 'react';
import '../../styles/Footer.scss';

const Footer = () => {
  return (
    <Fragment>
      <p>
        Copyright &copy; 2019 - {new Date().getFullYear()} -- TO-DO LIST -
        Placide IRANDORA
      </p>
    </Fragment>
  );
};

export default Footer;
