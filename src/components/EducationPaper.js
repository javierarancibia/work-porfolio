import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Link, Button } from "@material-ui/core";
import { FaAngleRight } from "react-icons/fa";
import Monkey from "./img/monkeyastronaut.png";
import { FcNext, FcPrevious } from "react-icons/fc";
import EducationGrid from "./EducationGrid"
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

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

const EducationPaper = (props) => {
  const [item, setItem] = useState("photo");
  const handleUi = (e) => {
    e.preventDefault();
    props.onGetUi(e.currentTarget.value);
    console.log(e.currentTarget.value);
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
          education<span className="blink">_</span>
        </h1>
        <h2
          style={{
            fontSize: 40,
            color: "grey",
            fontFamily: "ProximaNova",
            marginLeft: "13rem",
          }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          #coderhouse #desafioLatam #architecture.
        </h2>
        <Button
          onClick={handleUi}
          value="2"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <FcPrevious style={{ fontSize: "6rem" }} />
        </Button>
        <Button
          onClick={handleUi}
          value="4"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <FcNext style={{ fontSize: "6rem" }} />
        </Button>
      </Grid>
      <EducationGrid />
    </div>
  );
};

export default EducationPaper;
