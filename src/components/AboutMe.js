import AboutImg from "../images/about-img.webp";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>A dedicated Front-end Developer 💻</h4>
              <p>
                As a Front-End Developer equipped with a diverse skill
                set in HTML, CSS, JavaScript, Tailwind, and React. My
                proficiency lies in creating and managing responsive websites
                that prioritize seamless user interactions. I specialize in
                developing dynamic and captivating interfaces, employing clean
                and optimized code alongside the latest development tools and
                techniques. I thrive in collaborative environments, working
                effectively with cross-functional teams to deliver exceptional
                web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
