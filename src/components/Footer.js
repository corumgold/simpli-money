import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="links">
        <a href="mailto:goldstandard.dog@gmail.com">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/email.png"}
            alt="email"
          />
        </a>
        <a href="tel:14235092278">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/call.png"}
            alt="call"
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/goldstandarddog/"
          rel="noreferrer"
        >
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/instagram.png"}
            alt="call"
          />
        </a>
      </div>
      <p>Created with love by Cory Gold | © twentytwentythree</p>
    </section>
  );
};

export default Footer;
