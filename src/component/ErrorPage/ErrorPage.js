import React from "react";
import { Link } from "react-router-dom";
import "./style/_ErrorPage.scss";

function ErrorPage() {
  return (
    <div className="error-Container">
      <p className="errorCode">404</p>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorLinkHome">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
