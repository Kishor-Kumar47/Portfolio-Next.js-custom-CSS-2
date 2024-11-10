import React from 'react';
import "../app/style/Contact.css"; // Correct path to the CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-map">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "contrast(1.2) opacity(0.4)" }}
        />
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">Feel free to Contact us</p>
          <div className="contact-input-group">
            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
            />
          </div>
          <div className="contact-input-group">
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-textarea"
            />
          </div>
          <button className="contact-button">Send</button>
          <div className="contact-info">
            <p>Phone: +923473239151</p>
            <p>Email: ksir3334445@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
