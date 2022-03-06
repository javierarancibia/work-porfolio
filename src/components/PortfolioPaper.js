import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Link } from "@material-ui/core";
import { FcNext } from "react-icons/fc";
import PortfolioComponent from "./PortfolioComponent";
import DesignComponent from "./designComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(150),
      height: theme.spacing(35),
    },
  },
}));

const PortfolioPaper = (props) => {
  const [ui, setUi] = useState("1");
  const handleUi = (e) => {
    e.preventDefault();
    setUi(e.currentTarget.value);
    console.log(ui);
  };

  const nextPage = (e) => {
    e.preventDefault();
    props.onGetUi(e.currentTarget.value);
    console.log(ui);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        style={{
          margin: 0,
          padding: 10,
          boxShadow: "0px 15px 10px -15px  gray",
        }}
      >
        <h1
          className="homeTitle"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          workPortfolio<span className="blink">_</span>
        </h1>
        {ui === "1" ? (
          <h2
            style={{
              fontSize: 40,
              color: "grey",
              fontFamily: "ProximaNova",
              marginLeft: "13rem",
            }}
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            #ReactJS #Javascript #RubyOnRails
          </h2>
        ) : (
          <h2
            style={{
              fontSize: 40,
              color: "grey",
              fontFamily: "ProximaNova",
              marginLeft: "13rem",
            }}
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            #3DsMax #3dDesign #DigitalArt
          </h2>
        )}
        <Button onClick={nextPage} value="3">
          <FcNext
            style={{ fontSize: "6rem" }}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          />
        </Button>
      </Grid>
      <Grid xs={5}>
        <Button
          style={{
            marginRight: "1rem",
            color: "black",
            fontFamily: "ProximaNova",
            fontSize: "23px",
          }}
          onClick={handleUi}
          value="1"
        >
          Tech
        </Button>

        <Button
          style={{
            marginRight: "1rem",
            color: "black",
            fontFamily: "ProximaNova",
            fontSize: "23px",
          }}
          onClick={handleUi}
          value="2"
        >
          Design
        </Button>
        {ui === "1" && <PortfolioComponent />}
        {ui === "2" && <DesignComponent />}
      </Grid>
    </div>
  );
};

export default PortfolioPaper;
