import React, { Fragment, useState } from "react";
import Home from "./Home";
import CurriculumComponent from "./CurriculumComponent";
import AboutMe from "./AboutMe";

const HomeContainer = () => {
  const [Ui, setUi] = useState("0");

  const obtainUi = (currentUi) => {
    setUi(currentUi);
  };

  return (
    <Fragment>
      <Home onGetUi={obtainUi} />
      {Ui === "0" && <AboutMe />}
      {Ui === "1" && <AboutMe />}
      {Ui === "2" && <CurriculumComponent />}
    </Fragment>
  );
};

export default HomeContainer;
