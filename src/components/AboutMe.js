import React from "react";
import { Container, Box, Grid, Button } from "@material-ui/core/";
import Spinner from "./img/monkey1.gif";
import "./AboutMe.css";
import SocialIcons from "./SocialIcons";
import { FcNext } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AboutMe = (props) => {
  const handleUi = (e) => {
    e.preventDefault();
    props.onGetUi(e.currentTarget.value);
  };
  return (
    <Container>
      <Grid container>
        <h1
          className="homeTitle"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          desarrollador web.
        </h1>
        <h2
          className="homesubtitle"
          style={{ paddingBottom: 0 }}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          FrontEnd - BackEnd - Diseño{" "}
        </h2>

        <Grid xs={5}>
          <p
            style={{ marginTop: 20, fontSize: 25 }}
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            Soy un Desarrollador Full Stack con manejo en lenguajes de Front end
            (Javascript y React JS)
          </p>
          <p
            style={{ marginTop: 50, fontSize: 18 }}
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
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
            <img
              src={Spinner}
              width="320"
              style={{ marginLeft: "3rem", borderRadius: 25 }}
              alt="Spinner"
            />
          </Box>
        </Grid>
        <Grid xs={2}>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleUi} value="2">
              <FcNext
                style={{ fontSize: "7rem" }}
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              />
            </Button>
          </Box>
        </Grid>
      <SocialIcons />
      </Grid>

    </Container>
  );
};

export default AboutMe;
