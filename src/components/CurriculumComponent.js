import React, { useState } from "react";
import { Container, Box, Grid, Button } from "@material-ui/core/";
import Icons from "./Icons";
import PortfolioPaper from "./PortfolioPaper";
import CurriculumPaper from "./CurriculumPaper"
import PersonalPaper from "./PersonalPaper";


const CurriculumComponent = () => {
  const [ui, setUi] = useState("portfolio");

  const obtainUi = (currentUi) => {
    setUi(currentUi);
  };

  return (
    <Container>
      

      { ui === 'portfolio' && <PortfolioPaper /> }
      { ui === 'curriculum' && <CurriculumPaper /> }
      { ui === 'personal' && <PersonalPaper /> }
      <Icons onGetUi={obtainUi} />
      
    </Container>
  );
};

export default CurriculumComponent;
