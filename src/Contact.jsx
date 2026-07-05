import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact Us</h2>

      <div className="set-3">
        <div className="contact-page-1">
          <form className="login">
            <h3>Get in touch</h3>

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Your Query"
            />

            <textarea
              name="message"
              cols="25"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

            <p className="form-msg" hidden></p>
          </form>
        </div>

        <div className="contact-page-img">
          <img
            src="/flower.jpg"
            alt="Flowers"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;