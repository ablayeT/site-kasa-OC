import React from "react";
import "./Style/_Card.scss";

function Card({ cover, title }) {
  return (
    <div className="card-logement">
      <img src={cover} alt="appartement à louer" />
      <div className="card-logement__layer">
        <p className="card-logement__title">{title}</p>
      </div>
    </div>
  );
}

export default Card;
