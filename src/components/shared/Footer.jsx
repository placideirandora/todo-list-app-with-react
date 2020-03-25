import React, { Fragment } from 'react';
import { footerStyles } from '../../styles/footer';

const Footer = () => {
  return (
    <Fragment>
      <p style={footerStyles.paragraph}>
        Copyright &copy; 2019 - {new Date().getFullYear()} -- TO-DO LIST -
        Placide IRANDORA
      </p>
    </Fragment>
  );
};

export default Footer;
