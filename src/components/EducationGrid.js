import React from "react";
import "./EducationGrid.css";
import Desafio from "./img/desafio.png";
import Coderhouse from "./img/coderhouse.png";
import ielts from "./img/ielts.png";
import uvm from "./img/uvm.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const EducationGrid = () => {
  const gridInfo = [
    {
      classname: "gridy-1 gridyhe-2",
      title: "Fullstack Web Development with Ruby on Rails Bootcamp",
      subtitle: "Academia Desafio Latam 2020",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/11157/aprobacion-final-classroom-proyecto-full-stack-rails-g35-7839.png",
      diploma: true,
      img: [Desafio], 
      desc: '4 Months Bootcamp of Full Stack Web Development with Ruby on Rails'
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Javascript",
      subtitle: "Coderhouse 2021",
      link: "https://www.coderhouse.cl/certificados/60625f008ef20d0096645efb",
      diploma: true,
      img: [Coderhouse],
      desc: 'Two months intensive course of Web App Development with Javascript'
      
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "React JS",
      subtitle: "Coderhouse 2021",
      link: "https://www.coderhouse.cl/certificados/60c6388c364906033e3591bb",
      diploma: true,
      img: [Coderhouse],
      desc: 'Two months intensive course of Web App Development with React JS'
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "React Native with Expo",
      subtitle: "Coderhouse 2021",
      link: "https://www.coderhouse.cl/certificados/61de0096f53da30027d5212b?lang=en",
      diploma: true,
      img: [Coderhouse],
      desc: 'Two months intensive course of Mobile App Development with React Native and Expo'
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Architecture",
      subtitle: "University of Viña del Mar",
      diploma: false,
      img: [uvm],
      desc: 'Bachelor in Architecture'
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Languages",
      subtitle: "Advanced English",
      diploma: false,
      img: ielts,
      desc: '6.5 IELTS scored in University of Liverpool 2005'
    
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
