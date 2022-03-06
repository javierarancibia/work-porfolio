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
      <Grid container >
        <h1
          className="homeTitle"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          style={{backgroundColor: 'DodgerBlue', padding:0, marginRight:25}}
        >
          web developer<span className="blink">_</span>
        </h1>
        <h2
          className="homesubtitle"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          style={{
            margin: 0,
            paddingBottom: 20,
            // boxShadow: "0px 15px 10px -15px  gray",
          }}
        >
          FrontEnd - Web Designer{" "}
        </h2>

        <Grid xs={5}>
          <p
            style={{ marginTop: 50, fontSize: 25 }}
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            Web Developer / Designer currently in Rotterdam, NL
          </p>
          <p
            style={{ marginTop: 50, fontSize: 18 }}
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            Junior Web Developer with a multi-disciplinary and technical
            background, encompassing, coding, web development, 3D
            and architectural design. I have a keen interest in new
            technologies along with good visual design and user
            experience. Adept at contributing to highly collaborative work
            environment, finding solutions and determining customer
            satisfaction
          </p>
        </Grid>
        <Grid xs={5}>
          <Box display="flex" justifyContent="center">
            <img
              src={Spinner}
              width="320"
              style={{ marginLeft: "3rem", marginTop: "3rem", borderRadius: 25 }}
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
