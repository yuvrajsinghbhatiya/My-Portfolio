import React from "react";
import contactIMG from "../img/contact.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div
          className="contact-layout"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <div className="contact-left">
            <div className="contact-title">
              <h2>Contact Me</h2>
            </div>
            <div className="contact-subtitle">
              <p>Want to work together? Please feel free to contact me.</p>
            </div>
            <div className="contact-info">
              <div
                className="contact-item"
                data-aos="zoom-in-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="textIcon">
                  <FaMapMarkerAlt size={22} /> LOCATION
                </div>
                <a
                  href="https://maps.app.goo.gl/idSaitXuHmyvn6S78"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uttarakhand, India
                </a>
              </div>
              <div
                class="contact-item"
                data-aos="zoom-in-left"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="textIcon">
                  <IoMdMail size={22} /> EMAIL
                </div>
                <a href="mailto:yuvrajbhatiya57@gmail.com">
                  yuvrajbhatiya57@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div
            className="contact-right"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={contactIMG} alt="Contact Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
