import React from "react";
import { Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxheight: 500,
    borderRadius: 25,
    width: 500,
    display: 'block'
  },
});

const PortfolioComponent = (props) => {
  const classes = useStyles();
  const items = [
    {
      name: "Calculadora UF",
      sub: "Conversor de UF-CLP",
      desc: "Conversor de valores a la UF actual y viceversa, consumiendo una API publica con valor de la UF diaria",
      tech: "#ReactJS, #React-Bootstrap, #Javascript",
      link: "https://javierarancibia.github.io/react-ufcalculator/",
      img: "https://user-images.githubusercontent.com/69688629/131714834-2ae475a4-c31d-49ba-bb93-bf6127480c09.png"
    },
    {
      name: "Commercial City",
      sub: 'Red Social Inmobiliaria',
      desc: "App desarrollada para la publicacion de propiedades inmobiliarias e interaccion entre usuarios.",
      tech: "#RubyOnRails, #Bootstrap, #MailGun #AmazonAWS #Heroku",
      link: "https://still-anchorage-72067.herokuapp.com/",
      img: 'https://user-images.githubusercontent.com/69688629/100171455-8d4c4700-2ea5-11eb-8068-837afe94850f.jpeg'
    },
    {
      name: "Valtasadores",
      sub: 'Cotizador HTML-CSS-Javascript',
      desc: "Landing Page para negocio inmobiliario local, con cotizador de servicios desarrollado en Javascript",
      tech: "#HTML, #CSS, #Javascript, #Bootstrap",
      link: "https://www.valtasadores.cl/",
      img:'https://user-images.githubusercontent.com/69688629/131712916-65249d18-5744-43c5-aeed-439a90c0cb18.png'
    },
    {
      name: "Twitter Dashboard",
      sub: 'Tablero en tiempo real con Ruby on Rails',
      desc: "La app consume la API de Twitter para mostrar publicaciones en tiempo real del hashtag #Coronavirus",
      tech: "#RubyOnRails, #JQuery, #Bootstrap, #TwitterGem",
      link: "https://sleepy-ravine-23803.herokuapp.com/",
      img:'https://user-images.githubusercontent.com/69688629/131715284-65d40697-e6de-4ba4-9a5c-b4e06d072302.png'
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
  ];

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={items[props.item].name}
          height="250"
          image={items[props.item].img}
          title={items[props.item].name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "ProximaNova", fontWeight: "bold", color:'black' }}
          >
            {items[props.item].name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontFamily: "ProximaNova", fontWeight: "bold", fontSize: '1.2rem' }}
          >
            {items[props.item].sub}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "ProximaNova" }}
          >
            {items[props.item].desc}
          </Typography>
          <p>{items[props.item].tech}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" >
          <a href={items[props.item].link} target="blank">Link</a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PortfolioComponent;
