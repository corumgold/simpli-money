import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h3>About Me</h3>
      <>
        <div className="profile-picture">
          <img
            src={process.env.PUBLIC_URL + "/images/profile-photo.png"}
            alt="profile"
          />
          <h4>Cory Gold</h4>
          <h5>Founder</h5>
        </div>
        <div id="about-me-block">
          <div className="about-me-entry">
            At 22, I faced a financial mountain — buried in consumer debt, tied
            to a car loan, and barely scraping together savings. Stuck in a job
            that drained me, living paycheck to paycheck, the stress was
            overwhelming. It was clear: I needed a change.
          </div>

          <div className="about-me-entry">
            This turning point ignited my passion for personal finance. I
            devoured every book, dissected advice from finance experts, and
            immersed myself in the intricacies of budgeting, saving, and
            investing. Fueled by my desire to assist others, I founded Simpli
            Money — a mission to liberate individuals from the heavy weight of
            financial strain.
          </div>

          <div className="about-me-entry">
            I firmly believe that peace and freedom are the most precious
            currencies, attainable by anyone with a touch of effort and
            dedication. At Simpli Money, it's not just about managing money;
            it's about guiding you towards financial well-being and a life
            unburdened.
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutMe;
