import ProBox from "./ProBox";
import ShopseeIMG from "../images/shopsee.webp";
import BitTrackrIMG from "../images/bittrackr.webp";
import WeatherIMG from "../images/weather.webp";
import QuizIMG from "../images/quiz.webp";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>projects</p>
            <h3>Unique development, making your ideas come to life 🧑🏻‍💻</h3>
            <div className="projects-grid">
              <ProBox
                title="Shop See"
                img={ShopseeIMG}
                description="A Ecommerce Store, utilizing local storage, provides effortless online shopping with responsive design, enabling smooth product selection and a seamless user experience."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/yvrjbhatiya/Shop-See"
                demo="https://shop-see.vercel.app/"
                scrollY="-60.5%"
              />

              <ProBox
                title="BitTrackr"
                img={BitTrackrIMG}
                description="BitTrackr is a crypto app that provides users with real-time, accurate updates on cryptocurrency prices, market caps, trading volumes, and other key metrics."
                techno1="React"
                techno2=""
                code="https://github.com/yvrjbhatiya/BitTrackr"
                demo="https://bit-trackr.vercel.app/"
                scrollY="-57%"
              />

              <ProBox
                title="Weather Finder"
                img={WeatherIMG}
                description="Weather Finder delivers precise updates globally, ensuring a user-friendly experience. Integrated with a robust API, it offers reliable and swift weather forecasts anywhere."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/yvrjbhatiya/Weather-Finder"
                demo="https://weather-finder-seven.vercel.app/"
                cName="reversed-proj"
              />

              <ProBox
                title="Quiz App"
                img={QuizIMG}
                description="Quiz App featuring random questions, instant feedback, and score tracking. Engage in interactive learning with this user-friendly application."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/yvrjbhatiya/Quiz-App"
                demo="https://quiz-app-flax-six.vercel.app/"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
