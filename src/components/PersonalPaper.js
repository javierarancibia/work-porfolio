import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Link, Button } from "@material-ui/core";
import { FaAngleRight } from "react-icons/fa";
import Monkey from "./img/monkeyastronaut.png";
import { FcNext, FcPrevious } from "react-icons/fc";
import ContactForm from "./ContactForm"
import { AiOutlineHeart } from "react-icons/ai";
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

const PersonalPaper = (props) => {
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
          contact<span className="blink">_</span>
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
          #openforwork #contactMe #I<AiOutlineHeart style={{verticalAlign: 'middle', fontSize:35}} />React
        </h2>
        <Button
          onClick={handleUi}
          value="3"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <FcPrevious style={{ fontSize: "6rem" }} />
        </Button>
      </Grid>
      <Grid container xs={6}>
        <ContactForm />
      </Grid>
      <Grid xs={3}>
          <img
            src={Monkey}
            width="400"
            style={{ marginLeft: "3rem", marginTop: "2rem" }}
            alt="Spinner"
            className="monkeyAstronaut"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          />
      </Grid>
     
    </div>
  );
};

export default PersonalPaper;
