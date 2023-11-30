import ProBox from "./ProBox";
import ShopseeIMG from "../images/shopsee.webp";
import BitTrackrIMG from "../images/bittrackr.webp";
import WeatherIMG from "../images/weather.webp";
import CarRentalIMG from "../images/carrental.webp";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <h3>projects</h3>
          <div className="project-content">
            <div className="projects-grid">
              <ProBox
                title="Shop See"
                img={ShopseeIMG}
                description="A Ecommerce Store, utilizing local storage, provides effortless online shopping with responsive design, enabling smooth product selection and a seamless user experience."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/yvrjbhatiya/Shop-See"
                demo="https://shop-see.vercel.app/"
                scrollY="-68%"
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
                cName="reversed-proj"
              />

              <ProBox
                title="Car Rental"
                img={CarRentalIMG}
                description="Car Rental is a simple website that allows users to rent a car. It is built with HTML, CSS, and JavaScript, and is fully responsive on all devices."
                techno1="HTML"
                techno2="CSS"
                techno3="JavaScript"
                code="https://github.com/yvrjbhatiya/Car-Rental"
                demo="https://car-rental-topaz-six.vercel.app/"
                scrollY="-74%"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
