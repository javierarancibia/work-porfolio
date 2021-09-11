import React, { Fragment, useState } from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import PortfolioPaper from "./PortfolioPaper";
import EducationPaper from "./EducationPaper";
import PersonalPaper from "./PersonalPaper";
import { Container } from "@material-ui/core/";

const HomeContainer = () => {
  const [Ui, setUi] = useState("1");

  const obtainUi = (currentUi) => {
    setUi(currentUi);
  };

  return (
    <Fragment>
      <Home onGetUi={obtainUi} />
      <Container>
        {Ui === "1" && <AboutMe onGetUi={obtainUi} />}
        {Ui === "2" && <PortfolioPaper onGetUi={obtainUi} />}
        {Ui === "3" && <EducationPaper onGetUi={obtainUi} />}
        {Ui === "4" && <PersonalPaper onGetUi={obtainUi} />}
      </Container>
    </Fragment>
  );
};

export default HomeContainer;
