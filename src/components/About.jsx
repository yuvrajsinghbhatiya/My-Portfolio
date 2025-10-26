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
                Hi, I’m Yuvraj Bhatiya — a front-end developer who loves
                creating beautiful, responsive, and user-friendly websites. I
                work mainly with ReactJS, JavaScript, HTML, CSS, and Tailwind
                CSS, focusing on writing clean, efficient code and crafting
                smooth digital experiences. I’m passionate about design,
                attention to detail, and bringing ideas to life on screen. When
                I’m not coding, I enjoy exploring nature and finding inspiration
                in simple, peaceful moments — which often reflect in my design
                style.
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
