import React from "react";
import "./EducationGrid.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const EducationGrid = () => {
  const gridInfo = [
    {
      classname: "gridy-1 gridyhe-2",
      title: "Fullstack Bootcamp Desarrollo Web Ruby on Rails",
      subtitle: "Academia Desafio Latam",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/11157/aprobacion-final-classroom-proyecto-full-stack-rails-g35-7839.png",
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Javascript",
      subtitle: "Coderhouse",
      link: "https://www.coderhouse.cl/certificados/60625f008ef20d0096645efb",
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "React JS",
      subtitle: "Coderhouse",
      link: "https://www.coderhouse.cl/certificados/60c6388c364906033e3591bb",
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "React - The Complete Guide_Udemy",
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Arquitectura",
      subtitle: "Universidad de Viña del Mar"
    },
    {
      classname: "gridy-1 gridyhe-2",
      title: "Idiomas",
      subtitle: "Ingles IELTS 6.5"
    },
  ];

  return (
    <div style={{ marginTop: 50, borderRadius: 25 }}>
      {gridInfo.map((grid) => (
        <div className="gridywrap" data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-once="once">
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
              <p className="gridexerpt" style={{ marginTop: 0 }}>
                Lorem ipsum dolor set amet, some dummy content..
              </p>
              <a
                href={grid.link}
                target="_blank"
                className="grid-btn grid-more"
              >
                <span>Diploma</span> <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationGrid;
