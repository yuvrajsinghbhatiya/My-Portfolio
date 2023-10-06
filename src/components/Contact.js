import React from 'react';
import EmailIMG from "../img/email.png";
import LinkedInIMG from "../img/linkedin.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section__text">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={EmailIMG} alt="Email icon" className="icon contact-icon email-icon" />
            <p><a href="mailto:yuvrajbhatiya57@gmail.com">yuvrajbhatiya57@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img src={LinkedInIMG} alt="LinkedIn icon" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/yvrjbhatiya/">LinkedIn</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
