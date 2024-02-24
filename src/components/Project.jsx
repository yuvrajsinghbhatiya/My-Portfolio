import React from "react";
import Project1 from "../img/shopsee.webp";
import Project2 from "../img/bittrackr.webp";
import Project3 from "../img/carrental.webp";

const Project = () => {
  return (
    <section className="project" id="project">
      <div className="project-content">
        <div
          className="project-title"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <h2>Projects</h2>
        </div>
        <div
          className="project-subtitle"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <p>
            From concept to completion, explore the highlights of my project
            journey!
          </p>
        </div>
        <div className="project-grid">
          <div
            className="project-card"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="project-img">
              <a
                href="https://shop-see.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Project1} alt="Shopsee Project" />
              </a>
            </div>
            <div className="project-info">
              <h3>Shopsee</h3>
              <p>
                A Ecommerce Store, utilizing local storage, provides effortless
                online shopping with responsive design, enabling smooth product
                selection and a seamless user experience.
              </p>
              <p>
                TECH USED | <b>React, Tailwind</b>
              </p>
              <div className="project-btn">
                <a
                  href="https://github.com/yuvrajsinghbhatiya/Shop-See"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Code
                </a>
                <a
                  href="https://shop-see.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="project-img">
              <a
                href="https://bit-trackr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Project2} alt="BitTrackr Project" />
              </a>
            </div>
            <div className="project-info">
              <h3>BitTrackr</h3>
              <p>
                BitTrackr is a crypto app that provides users with real-time,
                accurate updates on cryptocurrency prices, market caps, trading
                volumes, and other key metrics.
              </p>
              <p>
                TECH USED | <b>React</b>
              </p>
              <div className="project-btn">
                <a
                  href="https://github.com/yuvrajsinghbhatiya/BitTrackr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Code
                </a>
                <a
                  href="https://bit-trackr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="project-img">
              <a
                href="https://cars-rentals.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Project3} alt="Car Rental Project" />
              </a>
            </div>
            <div className="project-info">
              <h3>Car Rental</h3>
              <p>
                Car Rental is a website for car rentals, constructed using HTML,
                CSS, and JavaScript. Visitors can also browse the available
                vehicles in the Cars section.
              </p>
              <p>
                TECH USED | <b>HTML, CSS & JS</b>
              </p>
              <div className="project-btn">
                <a
                  href="https://github.com/yuvrajsinghbhatiya/Car-Rental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Code
                </a>
                <a
                  href="https://cars-rentals.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="more">
          Visit my &nbsp;
          <a
            href="https://github.com/yuvrajsinghbhatiya"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub &nbsp;
          </a>
          for more projects...
        </p>
      </div>
    </section>
  );
};

export default Project;
