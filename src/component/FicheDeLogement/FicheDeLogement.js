import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "./Carrousel ";
import axios from "axios";
import Host from "./Host";
import Collapse from "../Collapse";
import Rate from "./Rate";
import Tag from "./Tag";
import "./Rate/style/_Rate.scss";
import "./Host/style/_Host.scss";
import "./Tag/style/_Tag.scss";

function FicheDeLogement() {
  const params = useParams();
  console.log("params :", params);
  const navigate = useNavigate();

  const [chosenFlat, setChoosenFlat] = useState();

  useEffect(() => {
    const fetchFlatData = async () => {
      try {
        const response = await axios.get("/dataList.json");
        // console.log("Response:", response);
        const chosen = response.data.find(({ id }) => id === params.id);
        console.log("Chosen:", chosen);
        response.data.map(() => {
          return setChoosenFlat(chosen);
        });

        if (chosen === undefined) {
          navigate("/404", { state: { message: "Données innaccessibles" } });
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchFlatData();
  }, [navigate, params.id]); // tableau de dependance vide : pour lancer qu'une seule fois.
  const slidesPictures = chosenFlat && chosenFlat.pictures;
  console.log("slidePicture : ", slidesPictures);
  const tags = chosenFlat && chosenFlat.tags;
  // ...
  const equipments = chosenFlat && chosenFlat.equipments;
  const equipmentsItem =
    equipments &&
    equipments.map((item, index) => {
      return (
        <li key={index} className="equipLlist">
          {item}
        </li>
      );
    });
  const hostName = chosenFlat && chosenFlat.host && chosenFlat.host.name;
  console.log("hostName: ", hostName);

  // const hostPic = chosenFlat.host.picture;

  console.log("chosenFlat :", chosenFlat);
  return (
    chosenFlat && (
      <div key={params.id} className="fiche-container">
        <Carrousel slidesPictures={slidesPictures} />
        FicheDeLogement
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{chosenFlat.title}</h1>
              <h3>{chosenFlat.location}</h3>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host hostName={hostName} hostPic={chosenFlat.host.picture} />
            </div>
            <div className="rate-container">
              <Rate score={chosenFlat.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse
            aboutTitle="Description"
            aboutText={chosenFlat.description}
          />
          <Collapse aboutTitle="Équipements" aboutText={equipmentsItem} />
        </div>
      </div>
    )
  );
}

export default FicheDeLogement;
