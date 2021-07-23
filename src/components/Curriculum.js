import React from "react";
import { Container, Grid, Typography } from "@material-ui/core/";

const Curriculum = () => {
  return (
    <Container>
      <Grid container>
        <Grid item sm={4}>
          <h3 align={"center"}>Experiencia</h3>
          <p>
            Cras in sem pharetra, fermentum justo pharetra, cursus tellus. Sed
            varius augue libero, eget mollis tellus lacinia vel. 
          </p>
        </Grid>
        <Grid item sm={4}>
          <h3 align={"center"}>Educacion</h3>
          <p>
            Cras in sem pharetra, fermentum justo pharetra, cursus tellus. Sed
            varius augue libero, eget mollis tellus lacinia vel. 
          </p>
        </Grid>
        <Grid item sm={4}>
          <h3 align={"center"}>Skills</h3>
          <p>
            Cras in sem pharetra, fermentum justo pharetra, cursus tellus. Sed
            varius augue libero, eget mollis tellus lacinia vel. 
          </p>
        </Grid>
        <Grid item sm={6} mt={6}>
          <h3 align={"center"}>Experiencia</h3>
          <p>
            Cras in sem pharetra, fermentum justo pharetra, cursus tellus. Sed
            varius augue libero, eget mollis tellus lacinia vel. 
          </p>
        </Grid>
        <Grid item sm={6}>
          <h3 align={"center"}>Educacion</h3>
          <p>
            Cras in sem pharetra, fermentum justo pharetra, cursus tellus. Sed
            varius augue libero, eget mollis tellus lacinia vel. 
          </p>
        </Grid>
        
      </Grid>
    </Container>
  );
};
export default Curriculum;
