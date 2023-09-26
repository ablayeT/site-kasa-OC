import React from "react";
import { Link } from "react-router-dom";
import "./style/_NavBar.scss";

function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/" className="navBar_link-home">
        Accueil
      </Link>
      <Link to="/about" className="navBar_link-about">
        A propos
      </Link>
    </nav>
  );
}

export default Navbar;
