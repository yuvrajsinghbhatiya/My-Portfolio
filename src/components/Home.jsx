import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import resume from "../files/resume.pdf";
<<<<<<< HEAD
import bgIMG from "../img/bg-light.webp";

const Home = () => {
  return (
    <section
      className="home"
      id="home"
      style={{
        backgroundImage: `url(${bgIMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
=======

const Home = () => {
  return (
    <section className="home" id="home">
>>>>>>> 662176c7e5714f4e78f67d4b288e3bdff5975f1e
      <div className="home-container">
        <div className="home-content">
          <div className="home-main">
            <div className="home-text">
              <h1
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
<<<<<<< HEAD
                style={{ textAlign: "center" }}
              >
                Web <br />
=======
              >
                Front-end <br />
>>>>>>> 662176c7e5714f4e78f67d4b288e3bdff5975f1e
                Developer
              </h1>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
<<<<<<< HEAD
                Hi, I'm Yuvraj Singh Bhatiya. A passionate Web Developer based
                in Uttarakhand, India.
=======
                Hi, I'm Yuvraj Singh Bhatiya. A passionate Front-end Developer
                based in Uttarakhand, India.
>>>>>>> 662176c7e5714f4e78f67d4b288e3bdff5975f1e
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
