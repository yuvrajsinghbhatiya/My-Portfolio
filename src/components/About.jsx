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
                Hey, I’m Yuvraj Bhatiya — a web developer who loves turning
                ideas into clean, functional, and visually appealing websites. I
                enjoy crafting responsive interfaces using HTML, CSS,
                JavaScript, ReactJS, and Node.js, making sure every
                project feels smooth and engaging. I believe great web
                experiences come from combining design, logic, and performance —
                and that’s what I focus on in every build. Currently pursuing my
                Master of Computer Applications (MCA), I’m constantly exploring
                new tools and techniques to push my creativity and code further.
                When I’m not coding, you’ll probably find me enjoying nature,
                chilling with close friends, or just sketching new ideas for my
                next project.
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
                  <img
                    src="https://skillicons.dev/icons?i=mongodb"
                    alt="MongoDB"
                    data-aos="zoom-in-right"
                    data-aos-delay="700"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="GitHub"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
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
