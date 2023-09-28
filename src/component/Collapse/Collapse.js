import React from "react";
import { useState, useRef, useEffect } from "react";
import chevron from "../Assets/images/vectorBas.svg";
import "./style/_Collapse.scss";
function Collapse(props) {
  const [toggle, setToggle] = useState(false);
  const [collapseHeight, setCollapseHeight] = useState();

  // modification du toggle au clique
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const heightRef = useRef();

  useEffect(() => {
    setCollapseHeight(`${heightRef.current.scrollHeight}px`);
  }, []);

  return (
    <div className={`Collapse${props.aboutStyle}`}>
      <div onClick={handleToggle} className="collapse__visible">
        <h2>{props.aboutTitle}</h2>
        <img
          src={chevron}
          alt="chevron"
          className={toggle ? "chevron rotated" : "chevron"}
        />
      </div>
      <div
        ref={heightRef}
        className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
        style={{ height: toggle ? `${collapseHeight}` : "0px" }}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
      </div>
    </div>
  );
}

export default Collapse;
