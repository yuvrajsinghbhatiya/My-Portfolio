import React from "react";
import ProjectIMG1 from "../img/project-1.webp";
import ProjectIMG2 from "../img/project-2.webp";
import ProjectIMG3 from "../img/project-3.webp";
import ArrowIMG from "../img/arrow.png";

const Projects = () => {
  const goToShopSeeGithub = () => {
    window.open("https://github.com/yvrjbhatiya/Shop-See");
  };

  const goToShopSeeLiveDemo = () => {
    window.open("https://shop-see.vercel.app/");
  };

  const goToChatAppGithub = () => {
    window.open("https://github.com/yvrjbhatiya/Chat_App");
  };

  const goToChatAppLiveDemo = () => {
    window.open("https://chat-app-rho-ivory.vercel.app/");
  };

  const goToWeatherFinderMiniGithub = () => {
    window.open("https://github.com/yvrjbhatiya/Weather-Finder");
  };

  const goToWeatherFinderMiniLiveDemo = () => {
    window.open("https://weather-finder-seven.vercel.app/");
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={ProjectIMG1}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Shop See</h2>
              <p>
                The Ecommerce Store, using React and Tailwind, offers responsive
                design, integrated APIs, and user-friendly product updates for a
                seamless experience.
              </p>
              <br />
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={goToShopSeeGithub}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={goToShopSeeLiveDemo}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={ProjectIMG3}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Weather Finder
              </h2>
              <p>
                Utilizing React and Tailwind, our user-friendly Weather Finder
                swiftly delivers precise updates anywhere, integrating a robust
                API for reliable forecasts.
              </p>
              <br />
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={goToWeatherFinderMiniGithub}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={goToWeatherFinderMiniLiveDemo}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={ProjectIMG2}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Chat App</h2>
              <p>
                The Chat App, built with React, Node.js, and MongoDB, offers
                Google authentication for easy login, real-time messaging, and
                dark/light theme options
              </p>
              <br />
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={goToChatAppGithub}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={goToChatAppLiveDemo}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={ArrowIMG}
        alt="Arrow icon"
        className="arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
