import React from "react";
import "./Icons.css";
import { FaRegListAlt, FaPaperclip, FaRegKeyboard } from "react-icons/fa";
import { Container, Box, Grid, Button } from "@material-ui/core";

const Icons = (props) => {
  const handleUi = (e) => {
    e.preventDefault();
    props.onGetUi(e.currentTarget.value);
  };

  return (
    <Container style={{ marginTop: 70 }}>
      <Grid container xs={8}>
        <Grid item>
          <Box mr={8}>
            <Button onClick={handleUi} value="portfolio">
              <h2 className="optionNumbers">01</h2>
            </Button>
          </Box>
        </Grid>
        <Box mr={8}>
          <Button onClick={handleUi} value="curriculum">
            <h2 className="optionNumbers">02</h2>
          </Button>
        </Box>
        <Box>
          <Button onClick={handleUi} value="personal">
          <h2 className="optionNumbers">03</h2>
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default Icons;
