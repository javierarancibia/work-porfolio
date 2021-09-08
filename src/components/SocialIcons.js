import { Container, Box, Grid } from "@material-ui/core";
import React from "react";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();


const SocialIcons = () => {
  return (
    <Container style={{marginTop: '2rem'}} data-aos="fade-up" data-aos-duration="1500">
      <Grid container xs={8}>
        <Grid item >
          <Box mr={8}>
            <a
              class="social-icon"
              href="https://www.linkedin.com/in/javier-arancibia/"
              target="_blank"
              rel="noopener"
              aria-label="Github"
            >
              <FaLinkedinIn style={{ fontSize: 30, color:'DodgerBlue' }} />
            </a>
          </Box>
        </Grid>
        <Box mr={8}>
          <Grid item>
            <a
              class="social-icon"
              href="https://github.com/javierarancibia"
              target="_blank"
              rel="noopener"
              aria-label="Github"
            >
              <FaGithub style={{ fontSize: 30, color:'DodgerBlue' }} />
            </a>
          </Grid>
        </Box>
        <Box>
          <Grid item>
            <a
              class="social-icon"
              href="https://stackoverflow.com/users/16550294/javier-arancibia-reyes"
              target="_blank"
              rel="noopener"
              aria-label="Github"
            >
              <FaStackOverflow style={{ fontSize: 30, color:'black' }} />
            </a>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default SocialIcons;
