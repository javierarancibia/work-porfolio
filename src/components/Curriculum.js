import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core/";
import Icons from "./Icons";
import Timeline from "./Timeline";
import PortfolioPaper from "./PortfolioPaper";
import Datos from "./Datos";

const Curriculum = () => {
  const [info, setInfo] = useState("0");

  const getInfo = (infoReceived) => {
    setInfo(infoReceived);
    console.log(info);
  };

  return (
    <Container>
      <Grid container spacing={10}>
        <Grid item sm={6} mt={6}>
          <h3 className="cvTitle" align={"center"}>
            Educacion
          </h3>
          <Timeline onGetInfo={getInfo} />
        </Grid>
        <Grid item sm={6}>
          {/* <h3 className="cvTitle" align={"center"} >
            Habilidades 
          </h3> */}
          {/* <Icons onGetInfo={getInfo} /> */}
        </Grid>
      </Grid>
          <PortfolioPaper info={info} style={{ marginTop: 50 }} />
    </Container>
  );
};
export default Curriculum;
