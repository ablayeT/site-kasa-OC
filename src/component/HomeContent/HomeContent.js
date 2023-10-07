import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../Cards";
import "./style/_HomeContent.scss";
import Banner from "../Banner";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://votre-nom-utilisateur.github.io/site-kasa-OC/dataList.json")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  console.log("data:", data);
  return (
    <>
      <Banner />
      <div className="cards-container ">
        {data.map((logement, index) => (
          <div className="card_logement" key={index}>
            <Link
              className="link_card_logement"
              to={`/logement/${logement.id}`}
            >
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
