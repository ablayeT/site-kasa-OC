import React from "react";
import Navbar from "../Navbar";
import "./style/_Header.scss";
import logo from "../Assets/images/LOGO.png";

function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="loigo" src={logo} alt="logo de kasa" />
      </figure>
      <Navbar className="navBar " />
    </header>
  );
}

export default Header;
