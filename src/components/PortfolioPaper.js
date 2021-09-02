import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Link } from "@material-ui/core";
import { FaAngleRight } from "react-icons/fa";
import Monkey from "./astronaut.png";
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

const PortfolioPaper = () => {
  const [item, setItem] = useState("photo");

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container style={{margin:0, padding: 10, boxShadow: '0px 15px 10px -15px  gray'}} >
        <h1 className="homeTitle">portafolio.</h1>
        <h2 style={{ fontSize: 40, color:'grey', fontFamily: 'ProximaNova', marginLeft: '13rem' }}>#ReactJS #Javascript #RubyOnRails</h2>
      </Grid>
      <Grid xs={5}>
        <Paper elevation={0}>
          <ul style={{ paddingLeft: 0 }}>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                fontFamily: "ProximaNova",
                color: "black",
                fontSize:23
              }}
              onClick={() => setItem(0)}
            >
              <b>Calculadora Uf</b> - Conversor UF
              <FaAngleRight
                style={{ fontSize: 25, color: "black", marginLeft: "1rem" }}
              />
            </Link>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1.5rem",
                cursor: "pointer",
                fontFamily: "ProximaNova",
                color: "black",
                fontSize:23
              }}
              onClick={() => setItem(1)}
            >
              <b>CommercialCity</b> - Real Estate App
              <FaAngleRight
                style={{ fontSize: 25, color: "black", marginLeft: "1rem" }}
              />
            </Link>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1.5rem",
                cursor: "pointer",
                fontFamily: "ProximaNova",
                color: "black",
                fontSize:25
              }}
              onClick={() => setItem(2)}
            >
              <b>ValTasadores</b> - Dynamic Landing Page
              <FaAngleRight
                style={{ fontSize: 25, color: "black", marginLeft: "1rem" }}
              />
            </Link>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1.5rem",
                cursor: "pointer",
                fontFamily: "ProximaNova",
                color: "black",
                fontSize:23
              }}
              onClick={() => setItem(3)}
            >
              <b>TwitterBoard </b> - RoR Real Time Dashboard
              <FaAngleRight
                style={{ fontSize: 25, color: "black", marginLeft: "1rem" }}
              />
            </Link>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1.5rem",
                cursor: "pointer",
                fontFamily: "ProximaNova",
                color: "black",
                fontSize:23
              }}
              onClick={() => setItem(4)}
            >
              <b>WebPortfolio</b> - Book de trabajos
              <FaAngleRight
                style={{ fontSize: 25, color: "black", marginLeft: "1rem" }}
              />
            </Link>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1.5rem",
                cursor: "pointer",
                fontFamily: "ProximaNova",
                color: "black",
                fontSize:23
              }}
              onClick={() => setItem(5)}
            >
              <b>GaleriaDigital</b> - Ecommerce
              <FaAngleRight
                style={{ fontSize: 25, color: "black", marginLeft: "1rem" }}
              />
            </Link>
          </ul>
        </Paper>
      </Grid>
      <Grid xs={5}>
        {item === "photo" ? (
          <img
            src={Monkey}
            width="400"
            style={{ marginLeft: "3rem" }}
            alt="Spinner"
          />
        ) : (
          <PortfolioComponent item={item} />
        )}
      </Grid>
    </div>
  );
};

export default PortfolioPaper;
