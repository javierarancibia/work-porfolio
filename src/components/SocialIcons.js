import { Container, Box, Grid } from "@material-ui/core";
import React from "react";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <Container>
      <Grid container xs={8}>
        <Grid item>
          <Box mr={8}>
            <a
              class="social-icon"
              href="https://www.linkedin.com/in/javier-arancibia/"
              target="_blank"
              rel="noopener"
              aria-label="Github"
            >
              <FaLinkedinIn style={{ fontSize: 30, color:'black' }} />
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
              <FaGithub style={{ fontSize: 30, color:'black' }} />
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
