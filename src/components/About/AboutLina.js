import React, { useState } from "react";

import './about.scss';

// The Cards
import LinaAboutCard from "./AboutCards/LinaCard/linaAboutCard";

const AboutLina = () => {

  return (
    <section>
      <div id="about" className="l-main-about">
        <h2 className="about-us-2 text-shadow-org">US</h2>

        {/* Card Components */}
        <LinaAboutCard/>
        {/* <LinaAboutCard /> */}
      </div>
    </section>
  );
};

export default AboutLina;