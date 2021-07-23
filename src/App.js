import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import HomeContainer from "./components/HomeContainer";
import Spinner from "./components/807.gif";
import { Box } from "@material-ui/core/";

function App() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 3000);
  }, []);

  return (
    <Fragment>
      {display ? (
        <HomeContainer />
      ) : (
        <Box display="flex" justifyContent="center" mt={10} p={1}>
          <img src={Spinner} width="400" style={{marginRight:'3rem'}} alt="Spinner"/>
          <img src={Spinner} width="400" style={{marginRight:'3rem'}} alt="Spinner"/>
          <img src={Spinner} width="400" alt="Spinner"/>
        </Box>
      )}
    </Fragment>
  );
}

export default App;

