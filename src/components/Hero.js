import "../dist/styles.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=tailwind",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=js",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=git",
    id: 3,
  },
];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End Developer</h1>
                <p>
                  Hi, I'm Yuvraj Singh Bhatiya. A passionate Front-end Developer
                  based in Uttarakhand, India. 
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/yvrjbhatiya/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/yvrjbhatiya"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                      <img src={icon.img} key={icon.id} alt="skill-icon" />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
