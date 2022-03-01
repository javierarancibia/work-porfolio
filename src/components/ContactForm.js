import React from "react";
import "./ContactForm.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ContactForm = () => {
  return (
    <div
      className="contact"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div id="container">
        <form action="#" method="post" id="contact_form">
          <div className="name">
            <label for="name"></label>

            <input
              type="text"
              placeholder="name"
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="email">
            <label for="email"></label>
            <input
              type="email"
              placeholder="email"
              name="email"
              id="email_input"
              required
            />
          </div>
          <div className="subject">
            <label for="subject"></label>
            <select
              placeholder="subject line"
              name="subject"
              id="subject_input"
              required
            >
              <option disabled hidden selected>
                Why you need me ...
              </option>
              <option>I would like to talk to you about a job opening...</option>
              <option>I need your freelance service</option>
            </select>
          </div>
          <div className="message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="message"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="enviar" id="form_button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
