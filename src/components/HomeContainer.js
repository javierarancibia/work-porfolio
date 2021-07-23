import React, { Fragment, useState } from "react";
import Home from "./Home";
import Curriculum from "./Curriculum";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import SiteOptions from "./SiteOptions";

const HomeContainer = () => {
  const [Ui, setUi] = useState("0");

  const obtainUi = (currentUi) => {
    setUi(currentUi);
  };

  return (
    <Fragment>
      <SiteOptions />
      <Home onGetUi={obtainUi} />
      {Ui === "0" && <AboutMe />}
      {Ui === "1" && <AboutMe />}
      {Ui === "2" && <Curriculum />}
      {Ui === "3" && <Portfolio />}
    </Fragment>
  );
};

export default HomeContainer;
