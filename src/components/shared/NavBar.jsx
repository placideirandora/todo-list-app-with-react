import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.scss';

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <Link to="/" className="logo">
          TO-DO LIST
        </Link>
        <Link to="/About" className="menu last">
          ABOUT
        </Link>
        <Link to="/AddTodo" className="menu second">
          ADD TODOS
        </Link>
        <Link to="/Todo" className="menu">
          VIEW TODOS
        </Link>
      </nav>
    </Fragment>
  );
};

export default Navbar;
