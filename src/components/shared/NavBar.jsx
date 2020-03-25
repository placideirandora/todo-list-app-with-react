import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { navBarStyles } from '../../styles/navBar';

const Navbar = () => {
  return (
    <Fragment>
      <nav style={navBarStyles.navBar}>
        <Link to="/" style={navBarStyles.logo}>
          TO-DO LIST
        </Link>
        <menu style={navBarStyles.menuWrapper}>
          <Link to="/Todo" style={navBarStyles.menu}>
            VIEW TODOS
          </Link>
          <Link to="/AddTodo" style={navBarStyles.menu}>
            ADD TODOS
          </Link>
          <Link to="/About" style={navBarStyles.menu}>
            ABOUT
          </Link>
        </menu>
      </nav>
    </Fragment>
  );
};

export default Navbar;
