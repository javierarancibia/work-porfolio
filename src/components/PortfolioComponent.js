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
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    borderRadius: 25,
    width: 550,
  },
});

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
      tech: "#ReactJS, #React-Bootstrap, #Javascript",
      link: "https://javierarancibia.github.io/react-ufcalculator/",
      img: "https://user-images.githubusercontent.com/69688629/133347685-0c3feedb-0fcb-4be7-9b5e-74bffc0085a3.png",
    },
    {
      name: "Portafolio Web",
      sub: "Book de trabajos dinamico",
      desc: "App para mostrar de manera dinamica mis proyectos y experiencia en el desarrollo web",
      tech: "#ReactJS, #MaterialUI",
      img: "https://user-images.githubusercontent.com/69688629/132593097-cd76b71d-eb06-4ccb-b095-f1c31b42abff.jpeg",
      link: "https://javierarancibia.github.io/work-porfolio/",
    },
    {
      name: "Galeria Digital",
      sub: "Maqueta de Ecommerce con React",
      desc: "Proyecto de Ecommerce dedicado a la venta de arte de autor, desarrollado en ReactJS para Coderhouse. ",
      tech: "#ReactJS, #Bootstrap",
      img: "https://user-images.githubusercontent.com/69688629/121763813-e069ac80-cb0c-11eb-98e9-314b56464205.gif",
    },
    {
      name: "CodingBros",
      desc: "Proyecto de Landing Page para consultora digital. ",
      tech: "#javascript #JQuery #htmlCss",
      img: "https://user-images.githubusercontent.com/69688629/132099492-0f5d016c-cb28-4dac-b406-7ace62282bcd.png",
      link: "https://www.codingbrostudio.com/",
    },
    {
      name: "Ricomida",
      desc: "Diseño UI de Landing Page para restaurante local. ",
      tech: "#javascript #JQuery #htmlCss",
      img: "https://user-images.githubusercontent.com/69688629/133955018-0d35bb6c-e1a7-4e26-8c14-6adfef8db4fd.png",
      link: "https://javierarancibia.github.io/ricomida/",
    },
    {
      name: "Portafolio Web Profesional",
      desc: "Diseño UI de Landing Page para portafolio para profesionales. ",
      tech: "#javascript #JQuery #htmlCss",
      img: "https://user-images.githubusercontent.com/69688629/133351446-01b8c8d8-f981-4682-bb36-f628e7db72bd.png",
      link: "https://javierarancibia.github.io/portafolio/",
    },
    {
      name: "Juego Piedra-Papel-Tijera",
      desc: "Juego del tradicional cachipun desarrollado en ReactJS y Bootstrap ",
      tech: "#reactJs #bootstrap #htmlCss",
      img: "https://user-images.githubusercontent.com/69688629/133954763-8f4c9464-6875-4144-9a49-c2f208917c4f.png",
      link: "https://javierarancibia.github.io/RockPaperScissorsReactGame/",
    },
    {
      name: "React-RubyOnRails Pokedex",
      desc: "App de prueba con PokeApi y Ruby on Rails con React de Webpack",
      tech: "#ReactJs #bootstrap #RubyOnRails",
      img: "https://user-images.githubusercontent.com/69688629/137804238-f852cc07-0e97-4c50-b866-d42ff4fc54a6.png",
      link: "https://pure-retreat-87325.herokuapp.com/",
    },
    {
      name: "RandomRecipes App",
      desc: "App de recetas con React Native - Expo y Edamam API",
      tech: "#reactNative #CSS #Javascript #Expo",
      img: "https://user-images.githubusercontent.com/69688629/151179890-9f9d7454-5c29-4fa6-b6b3-35b4a0b4a251.png",
      link: "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40javathejat/food-app-6c76468fdf8f4428a529a0e166c34d9a-signed.apk",
    },
    {
      name: "...actualmente programando",
      desc: "...siempre programando",
      img: "https://media3.giphy.com/media/y5gCdhnsGnKRh20TnE/giphy.gif?cid=790b761107ddfd218677db6570dd5a6db0eb9bbf68d779f6&rid=giphy.gif&ct=g",
      link: "https://github.com/javierarancibia"
    },
  ];

  return (
    <Grid
      container
      spacing={9}
      style={{ width: "80rem", marginTop: 40 }}
      data-aos="fade-down"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
    >
      {items.map((eachItem, i) => (
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={eachItem.name}
                height="350"
                image={eachItem.img}
                title={eachItem.name}
              />
              <CardContent
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-once="once"
              >
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
