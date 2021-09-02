import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { FaAngleRight } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(150),
      height: theme.spacing(35),
      borderRadius: 25,
    },
  },
}));

const PersonalPaper = ({ info }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid xs={5}>
      <Paper elevation={0}>
          <ul>
            <li style={{ display: "flex", alignItems: "center" }}>
              <b>Idiomas </b> - Coderhouse Mayo 2021
              <FaAngleRight
                style={{ fontSize: 25, color: "blue", marginLeft: "1rem" }}
              />
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <b>Javascript</b> - Coderhouse Marzo 2021
              <FaAngleRight
                style={{ fontSize: 25, color: "blue", marginLeft: "1rem" }}
              />
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <b>ValTasadores</b> - Dynamic Landing Page
              <FaAngleRight
                style={{ fontSize: 25, color: "blue", marginLeft: "1rem" }}
              />
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <b>Twitter Dashboard</b> - RoR Real Time API Dashboard
              <FaAngleRight
                style={{ fontSize: 25, color: "blue", marginLeft: "1rem" }}
              />
            </li>
          </ul>
        </Paper>
      </Grid>
      <Grid xs={5}>
        <p>sdfkhs</p>
      </Grid>
    </div>
  );
};

export default PersonalPaper;