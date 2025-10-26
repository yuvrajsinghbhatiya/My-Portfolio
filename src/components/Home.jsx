import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import resume from "../files/resume.pdf";
import bgLight from "../img/bg-light.webp";
import bgDark from "../img/bg-dark.webp";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDarkMode(theme === "dark");

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(updatedTheme === "dark");
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home" id="home">
      {/* Light Background */}
      <div
        className="bg-layer"
        style={{
          backgroundImage: `url(${bgLight})`,
          opacity: isDarkMode ? 0 : 1,
        }}
      />
      {/* Dark Background */}
      <div
        className="bg-layer"
        style={{
          backgroundImage: `url(${bgDark})`,
          opacity: isDarkMode ? 1 : 0,
        }}
      />

      <div className="home-container">
        <div className="home-content">
          <div className="home-main">
            <div className="home-text">
              <h1
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
                style={{ textAlign: "center" }}
              >
                Front-end <br />
                Developer
              </h1>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                Crafting websites that are functional, engaging, and visually appealing.
              </p>

              <div className="home-socials">
                <a
                  href="https://www.linkedin.com/in/yvrjbhatiya/"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-easing="ease-out-cubic"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/yuvrajsinghbhatiya"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-easing="ease-out-cubic"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-easing="ease-out-cubic"
                >
                  <FaArrowDown size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
