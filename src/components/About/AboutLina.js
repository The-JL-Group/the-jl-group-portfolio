import React, { useState } from "react";

import './about.css';

// The Cards
import LinaAboutCard from "./AboutCards/LinaCard/linaAboutCard";

const AboutLina = () => {

  return (
    <section>
      <div id="about" className="l-main-about">

        {/* Card Components */}
        <LinaAboutCard/>
        {/* <LinaAboutCard /> */}
      </div>
    </section>
  );
};

export default AboutLina;