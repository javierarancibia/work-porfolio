import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, IconButton, Typography, Container } from "@material-ui/core";
import { FaLightbulb } from "react-icons/fa";
import { GiMonkey } from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = (props) => {
  const handleUi = (e) => {
    e.preventDefault();
    props.onGetUi(e.currentTarget.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'black', lineHeight: 5}} >
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              <GiMonkey style={{fontSize:60}} />
            </Typography>
            <Button
              style={{ marginRight: "1rem", color: "white", fontFamily: "ProximaNova"}}
              onClick={handleUi}
              value="1"
            >
              Acerca de mi
            </Button>
            <span>|</span>
            <Button
              style={{
                marginRight: "1rem",
                marginLeft: "1rem",
                color: "white", fontFamily: "ProximaNova"
              }}
              onClick={handleUi}
              value="2"
            >
              CV / Resume
            </Button>
            <span>|</span>
            <Button
              style={{ marginLeft: "1rem", color: "white", fontFamily: "ProximaNova" }}
              onClick={handleUi}
              value="3"
            >
              Contacto
            </Button>
            <Button style={{ marginLeft: "1rem" }} onClick={handleUi} value="3">
              <FaLightbulb style={{ fontSize: 20 }} />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Home;
