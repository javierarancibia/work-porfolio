import React, { Fragment } from "react";
import "./Home.css";
import { Button, Box } from "@material-ui/core/";

const Home = (props) => {

  const handleUi = (e) => {
    e.preventDefault();
    props.onGetUi(e.currentTarget.value);
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Box
          variant="text"
          color="primary"
          aria-label="text primary button group"
          className="title1"
        >
          <Button style={{ marginRight: "1rem" }} onClick={handleUi} value="1">
            Acerca de mi
          </Button>
          <span>|</span>
          <Button
            style={{ marginRight: "1rem", marginLeft: "1rem" }}
            onClick={handleUi}
            value="2"
          >
            CV / Resume
          </Button>
          <span>|</span>
          <Button style={{ marginLeft: "1rem" }} onClick={handleUi} value="3">
           Portfolio
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Home;
