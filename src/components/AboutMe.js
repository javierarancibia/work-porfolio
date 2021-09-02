import React from "react";
import { Container, Box, Grid, Button } from "@material-ui/core/";
import Spinner from "./monkey.gif";
import "./AboutMe.css";
import SocialIcons from './SocialIcons'
import { FcNext } from "react-icons/fc";

const AboutMe = () => {
  return (
    <Container>
      <Grid container>
        <h1 className="homeTitle">desarrollador web.</h1>
        <h2 className="homesubtitle" style={{paddingBottom:0}} >FrontEnd - BackEnd - Diseño </h2>

        <Grid xs={5} >
          <p style={{marginTop:50, fontSize:18}}>
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
            <img src={Spinner} width="300" style={{marginLeft:'3rem'}} alt="Spinner"/>
          </Box>
        </Grid>
        <Grid xs={2}>
          <Box display="flex" justifyContent="center">
            <FcNext style={{fontSize:'7rem'}} />
          </Box>
        </Grid>
      </Grid>

      <SocialIcons />
    </Container>
  );
};

export default AboutMe;
