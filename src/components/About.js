import React from "react";
import ArrowIMG from "../img/arrow.png";
import ExperienceIMG from "../img/experience.png";
import EducationIMG from "../img/education.png";
import AboutIMG from "../img/about-pic.png";


const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__about-container">
          <img src={AboutIMG} alt="profilepicture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={ExperienceIMG} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                1 years <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img src={EducationIMG} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                B.C.A Bachelors Degree
                <br />
                Web Development Course
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a highly motivated and experienced web developer proficient
              in <strong>HTML</strong>, <strong>CSS</strong>,
              <strong>Tailwind</strong>, <strong>JavaScript</strong>, and
              <strong> React</strong>, driven to contribute my skills to
              innovative projects. With a strong focus on user experience and
              responsive design, I have a proven track record of building
              visually appealing websites. I'm eager to bring my creativity and
              dedication to a dynamic team, ready to make a meaningful impact in
              the web development domain.
            </p>
          </div>
        </div>
      </div>
      <img
        src={ArrowIMG}
        alt="Arrow icon"
        className="arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default About;
