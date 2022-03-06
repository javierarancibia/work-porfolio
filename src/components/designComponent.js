import React from "react";
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

const DesignComponent = () => {
  const classes = useStyles();
  const items = [
    {
      name: "Hard Surface Ro Bot",
      sub: "3D Design",
      desc: "3D Personal project to enchance UI future design",
      tech: "3DsMax, #3dDesign #HardSurface",
      link: "https://drive.google.com/file/d/1i5T1KT0jx4Bg6IIeiioxF4VvsBlaRq6L/view?usp=sharing",
      img: "http://drive.google.com/uc?export=view&id=1i5T1KT0jx4Bg6IIeiioxF4VvsBlaRq6L",
    },
    {
      name: "New Industrial Arch",
      sub: "Architecture Design",
      desc: "University Project for Bachelor Degree of New Sustainable Industrial Architecture ",
      tech: "#architecture, #3dDesign, #GraphicDesign",
      link: "https://drive.google.com/file/d/1jx5Z98t5dBb2GyW4D6RhO9zg6JtxwjoU/view?usp=sharing",
      img: "https://drive.google.com/uc?export=view&id=1jx5Z98t5dBb2GyW4D6RhO9zg6JtxwjoU",
    },
    {
      name: "New Industrial Arch",
      sub: "Architecture Design",
      desc: "University Project for Bachelor Degree of New Sustainable Industrial Architecture ",
      tech: "#architecture, #3dDesign, #GraphicDesign",
      link: "https://drive.google.com/file/d/1MrIVVJmkd1QJ2cpYKgG87jAkKGbPHKWY/view?usp=sharing",
      img: "https://drive.google.com/uc?export=view&id=1MrIVVJmkd1QJ2cpYKgG87jAkKGbPHKWY",
    },
    {
      name: "New Industrial Arch",
      sub: "Architecture Design",
      desc: "University Project for Bachelor Degree of New Sustainable Industrial Architecture ",
      tech: "#architecture, #3dDesign, #GraphicDesign",
      link: "https://drive.google.com/file/d/1AoW1ftD-_1793-uwQVH3qQ7F4mUCFEDL/view?usp=sharing",
      img: "https://drive.google.com/uc?export=view&id=1AoW1ftD-_1793-uwQVH3qQ7F4mUCFEDL",
    },
    {
      name: "Arch Paint Series",
      sub: "Photography project to enchance UI design websites",
      desc: "Digital Art for UI and Graphic web design ",
      tech: "#Photoshop, #Architecture, #Photography",
      link: "https://drive.google.com/file/d/1WJzPZNq9ld389Dh492moMhmRutty0uFS/view?usp=sharing",
      img: "https://drive.google.com/uc?export=view&id=1WJzPZNq9ld389Dh492moMhmRutty0uFS",
    },
    {
      name: "Arch Paint Series",
      sub: "Photography project to enchance UI design websites",
      desc: "Digital Art for UI and Graphic web design ",
      tech: "#Photoshop, #Architecture, #Photography",
      link: "https://drive.google.com/file/d/1gVKmlgKWfRc-Ycdpjwu7ZsK6K04pbj2z/view?usp=sharing",
      img: "https://drive.google.com/uc?export=view&id=1gVKmlgKWfRc-Ycdpjwu7ZsK6K04pbj2z",
    },
    {
      name: "2D House Design",
      sub: "Architecture House Project",
      desc: "Architecture House Project",
      tech: "#Autocad, #Twinmotion, #Architecture",
      link: "https://drive.google.com/file/d/1TOk4cBFkR7RdEk5SRry4q2g2iZHPDSnZ/view?usp=sharing",
      img: "https://drive.google.com/uc?export=view&id=1TOk4cBFkR7RdEk5SRry4q2g2iZHPDSnZ",
    },
    {
      name: "Giants Series",
      sub: "Personal Photography Art Project",
      desc: "Personal Photography Art Project",
      tech: "#Photoshop #DigitalArt #Photography",
      link: "https://drive.google.com/file/d/1IN9PYiXp9XUB4VuNmzcweQMix5lerZwo/view?usp=sharing",
      img: "https://drive.google.com/uc?export=view&id=1IN9PYiXp9XUB4VuNmzcweQMix5lerZwo",
    },
    {
      name: "Giants Series",
      sub: "Personal Photography Art Project",
      desc: "Personal Photography Art Project",
      tech: "#Photoshop #DigitalArt #Photography",
      link: "https://drive.google.com/file/d/19uHurPohwcY1scaKLp-Ou3QoNmfF1Ppa/view?usp=sharing",
      img: "https://drive.google.com/uc?export=view&id=19uHurPohwcY1scaKLp-Ou3QoNmfF1Ppa",
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

export default DesignComponent;
