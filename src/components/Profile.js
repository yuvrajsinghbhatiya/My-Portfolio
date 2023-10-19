import React from "react";
import Logo from "../img/profile-pic.png";
import GithubIMG from "../img/github.png";
import LinkedInIMG from "../img/linkedin.png";

const Profile = () => {
  const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yvrjbhatiya/");
  };
  
  const goToGithub = () => {
    window.open("https://github.com/yvrjbhatiya");
  };

  const goToResume = () => {
    window.open("https://drive.google.com/file/d/12vWK1FfmBsV__3w3eI4CeI4_Zi2LV5nX/view?usp=share_link");
  }
  
return (
  <section id="profile">
    <div className="section__pic-container">
      <img src={Logo} alt="profike_pic" className="profile-pic" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Yuvraj Singh Bhatiya</h1>
      <p className="section__text__p2">Frontend Developer</p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onClick={goToResume}
        >
          Download CV
        </button>
      </div>
      <div id="socials-container">
        <img
          src={LinkedInIMG}
          alt="My LinkedIn profile"
          className="icon"
          onClick={goToLinkedIn}
        />
        <img
          src={GithubIMG}
          alt="My Github profile"
          className="icon"
          onClick={goToGithub}
        />
      </div>
    </div>
  </section>
);
};

export default Profile;
