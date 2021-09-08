import React, { Fragment } from "react";
import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    borderRadius: 25,
    width: 550,
  },
});

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const PortfolioComponent = () => {
  const classes = useStyles();
  const items = [
    {
      name: "Commercial City",
      sub: "Red Social Inmobiliaria",
      desc: "App desarrollada para la publicacion de propiedades inmobiliarias e interaccion entre usuarios.",
      tech: "#RubyOnRails, #Bootstrap, #MailGun #AmazonAWS #Heroku",
      link: "https://still-anchorage-72067.herokuapp.com/",
      img: "https://user-images.githubusercontent.com/69688629/100171455-8d4c4700-2ea5-11eb-8068-837afe94850f.jpeg",
    },
    {
      name: "Valtasadores",
      sub: "Cotizador HTML-CSS-Javascript",
      desc: "Landing Page para negocio inmobiliario local, con cotizador de servicios desarrollado en Javascript",
      tech: "#html, #css, #Javascript, #Bootstrap #JQuery",
      link: "https://www.valtasadores.cl/",
      img: "https://user-images.githubusercontent.com/69688629/131712916-65249d18-5744-43c5-aeed-439a90c0cb18.png",
    },
    {
      name: "Twitter Dashboard",
      sub: "Tablero en tiempo real con RoR",
      desc: "La app consume la API de Twitter para mostrar publicaciones en tiempo real cada 5 segundos de #Coronavirus",
      tech: "#RubyOnRails, #JQuery, #Bootstrap, #TwitterGem",
      link: "https://sleepy-ravine-23803.herokuapp.com/",
      img: "https://user-images.githubusercontent.com/69688629/131715284-65d40697-e6de-4ba4-9a5c-b4e06d072302.png",
    },
      {
        name: "Calculadora UF",
        sub: "Conversor de UF-CLP",
        desc: "Conversor de valores a la UF actual y viceversa, consumiendo una API publica con valor de la UF diaria",
        tech: "#ReactJS, #React-Bootstrap, #Javascript #Bootstrap",
        link: "https://javierarancibia.github.io/react-ufcalculator/",
        img: "https://user-images.githubusercontent.com/69688629/131714834-2ae475a4-c31d-49ba-bb93-bf6127480c09.png",
      },
    {
      name: "Portafolio Web",
      sub: "Book de trabajo dinamico en ReactJS",
      desc: "App para mostrar de manera dinamica mis proyectos y experiencia en el desarrollo web",
      tech: "#ReactJS, #MaterialUI",
    },
    {
      name: "Galeria Digital",
      desc: "Proyecto de Ecommerce dedicado a la venta de arte de autor, desarrollado en ReactJS para Coderhouse. ",
      tech: "#ReactJS, #Bootstrap",
      img: "https://user-images.githubusercontent.com/69688629/121763813-e069ac80-cb0c-11eb-98e9-314b56464205.gif",
    },
    {
      name: "CodingBros",
      desc: "Proyecto de Landing Page para consultora digital. ",
      tech: "#javascript #JQuery #htmlCss",
      img: "https://user-images.githubusercontent.com/69688629/132099492-0f5d016c-cb28-4dac-b406-7ace62282bcd.png",
      link: "https://javierarancibia.github.io/coding-bros/",
    },
  ];

  return (
      <Grid container spacing={9} style={{width: '75rem', marginTop:40}} data-aos="fade-down" data-aos-offset="50" data-aos-delay="50" data-aos-duration="2000" data-aos-easing="ease-in-out">
        {items.map((eachItem, i) => (
          <Grid item xs={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={eachItem.name}
                  height="200"
                  image={eachItem.img}
                  title={eachItem.name}
                />
                <CardContent data-aos="fade-right" data-aos-offset="50" data-aos-delay="50" data-aos-duration="1500" data-aos-once="once">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      fontFamily: "ProximaNova",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {eachItem.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      fontFamily: "ProximaNova",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    {eachItem.sub}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontFamily: "ProximaNova" }}
                  >
                    {eachItem.desc}
                  </Typography>
                  <p>{eachItem.tech}</p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="primary">
                  <a href={eachItem.link} target="blank">
                    Link
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
};

export default PortfolioComponent;
