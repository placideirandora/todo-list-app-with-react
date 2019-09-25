import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Nav.scss";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">TO-DO LIST</Link>
      <Link to="/About" className="menu last">ABOUT</Link>
      <Link to="/Todos" className="menu">TODOS</Link>
    </nav>
  );
};

export default Navbar;
