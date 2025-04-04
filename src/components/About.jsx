import React from "react";
import aboutIMG from "../img/about.svg";

const About = () => {
  return (
    <section className="about" id="about">
      <div
        className="about-content"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div className="about-layout">
          <div className="about-left">
            <div className="about-title">
              <h2>About Me</h2>
            </div>
            <div className="about-subtitle">
              <p>
                As a Front-End Developer equipped with a diverse skill set in
                HTML, CSS, JavaScript, Tailwind, React and Node.JS. My proficiency lies
                in creating and managing responsive websites that prioritize
                seamless user interactions. I specialize in developing dynamic
                and captivating interfaces, employing clean and optimized code
                alongside the latest development tools and techniques. I thrive
                in collaborative environments, working effectively with
                cross-functional teams to deliver exceptional web applications.
              </p>
            </div>
            <div className="tech-stack">
              <p data-aos="zoom-in-right" data-aos-delay="100">
                Tech Stack
              </p>
              <div className="tech-logo">
                <ul>
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    alt="HTML"
                    data-aos="zoom-in-right"
                    data-aos-delay="100"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=css"
                    alt="CSS"
                    data-aos="zoom-in-right"
                    data-aos-delay="200"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    alt="Tailwind CSS"
                    data-aos="zoom-in-right"
                    data-aos-delay="300"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt="JavaScript"
                    data-aos="zoom-in-right"
                    data-aos-delay="400"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="React"
                    data-aos="zoom-in-right"
                    data-aos-delay="500"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="Node.js"
                    data-aos="zoom-in-right"
                    data-aos-delay="600"
                  />
                </ul>

              </div>
            </div>
          </div>
          <div
            className="about-right"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={aboutIMG} alt="About Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
