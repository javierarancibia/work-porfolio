import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Link } from "@material-ui/core";
import { FcNext } from "react-icons/fc";
import PortfolioComponent from "./PortfolioComponent";

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
  const handleUi = (e) => {
    e.preventDefault();
    props.onGetUi(e.currentTarget.value);
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
        <Button onClick={handleUi} value="3">
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
        <PortfolioComponent />
      </Grid>
    </div>
  );
};

export default PortfolioPaper;
