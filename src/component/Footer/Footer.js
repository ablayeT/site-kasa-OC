import React from "react";
import logo from "../Assets/images/logo-footer.svg";
import "./style/_Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <img src={logo} alt="logo de casa" />
      <p className="footer-container__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
