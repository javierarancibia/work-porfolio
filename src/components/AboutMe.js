import React from "react";
import { Container, Box, Grid } from "@material-ui/core/";
import "./AboutMe.css";
import Photo from "./circle-cropped.png";

const AboutMe = () => {
  return (
    <Container>
      <Grid container>
        <h1>Hola, Soy Javier</h1>
        <h2>Desarrollador Web Full Stack </h2>

        <Grid xs={5}>
          <p>
            Desarrollador Full Stack con manejo en lenguajes de Front end
            (Javascript y React JS) y de Backend (Ruby On Rails). Al mismo
            tiempo, tengo experiencia trabajando en programas de diseño
            arquitectónico y de interiores. Me interesa mucho participar en
            transformaciones digitales de organizaciones, y ser parte de una
            célula Agil como desarrollador full stack. Me apasiona el mundo
            digital y me encanta conocer nuevas tecnologías.
          </p>
        </Grid>
        <Grid xs={5}>
          <Box display="flex" justifyContent="center">
            <img src={Photo} width="300" alt="Profile"/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
