import React from "react";
import "./EducationGrid.css";
import Desafio from "./img/desafio.png";
import Coderhouse from "./img/coderhouse.png";
import Udemy from "./img/udemy.png";
import ielts from "./img/ielts.png";
import uvm from "./img/uvm.png";
import italy from "./img/italy.png";
import chile from "./img/chile.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const EducationGrid = () => {
  const gridInfo = [
    {
      classname: "gridy-1 gridyhe-2",
      title: "Fullstack Bootcamp Desarrollo Web Ruby on Rails",
      subtitle: "Academia Desafio Latam 2020",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/11157/aprobacion-final-classroom-proyecto-full-stack-rails-g35-7839.png",
      diploma: true,
      img: [Desafio], 
      desc: 'Bootcamp de 4 meses enfocado a la especializacion en desarrollo de aplicaciones con Ruby on Rails'
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Javascript",
      subtitle: "Coderhouse 2021",
      link: "https://www.coderhouse.cl/certificados/60625f008ef20d0096645efb",
      diploma: true,
      img: [Coderhouse],
      desc: 'Curso de 2 meses para profundizar mis conocimientos en Javascript y lograr desarrollar aplicaciones dinamicas'
      
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "React JS",
      subtitle: "Coderhouse 2021",
      link: "https://www.coderhouse.cl/certificados/60c6388c364906033e3591bb",
      diploma: true,
      img: [Coderhouse],
      desc: 'Curso de 2 meses de introduccion y desarrollo de aplicaciones con React JS'
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "React - The Complete Guide",
      subtitle: 'Udemy',
      diploma: false,
      img: [Udemy],
      desc: 'Profundizacion en el desarrollo de apps con React Js, en topicos como context, testing, redux y server side rendering'
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Arquitectura",
      subtitle: "Universidad de Viña del Mar",
      diploma: false,
      img: [uvm],
      desc: 'Titulo de Pregrado en Arquitectura '
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Idiomas",
      subtitle: "Ingles IELTS 6.5",
      diploma: false,
      img: ielts,
      desc: 'Resultado de 6.5 en prueba IELTS realizada en la Universidad de Liverpool el año 2005'
    
    },
  ];

  return (
    <div style={{ marginTop: 50, borderRadius: 25 }}>
      {gridInfo.map((grid) => (
        <div
          className="gridywrap"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-once="once"
        >
          <div
            className={grid.classname}
            style={{ borderRadius: 25, marginTop: 50 }}
          >
            <div className="gridimg">&nbsp;</div>

            <div
              className="gridinfo"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-once="once"
            >
              <h3>{grid.title}</h3>
              <h4 style={{ color: "white", fontSize: "1rem" }}>
                {grid.subtitle}
              </h4>
              <div className="gridmeta"></div>
              <img src={grid.img} width="150" />
              <p className="gridexerpt" style={{ marginTop: 0 }}>
                {grid.desc}
              </p>
              <a
                href={grid.link}
                target="_blank"
                className="grid-btn grid-more"
              >
                {grid.diploma && <span>Diploma</span>}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationGrid;
