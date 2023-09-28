import React from "react";
import AboutBanner from "../AboutBanner";
import aboutDataArray from "./AboutContent.data/";
import Collapse from "../Collapse";
function AboutContent() {
  return (
    <div>
      <AboutBanner />
      {aboutDataArray.map((about, index) => (
        <Collapse
          key={index}
          aboutTitle={about.aboutTitle}
          aboutText={about.aboutText}
          aboutStyle="about-style"
        />
      ))}
    </div>
  );
}

export default AboutContent;
