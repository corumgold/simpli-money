import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h3>About Us</h3>
      <>
        <div className="profile-picture">
          <img
            src={process.env.PUBLIC_URL + "/images/profile-photo.png"}
            alt="profile"
          />
          <h4>Cory Gold</h4>
          <h5>Co-Founder</h5>
        </div>
        <div id="about-me-block">
          <div className="about-me-entry">
            Cory has had a lifelong love for dogs since the day he was born. He
            became passionate about dog training after a frustrating experience
            with Bella, his German Shepherd, who reverted to her old habits due
            to a lack of follow-up from the trainer he sought out. Luckily, when
            he met Marguerite, they teamed up to train Bella, and she became a
            happier, well-behaved dog. Now, Cory and Marguerite are on a mission
            to help more dogs and their owners communicate better for a happier
            life together.
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutMe;
