import React from "react";
import Review from "./Review";
import reviews from "../reviews";

const Reviews = () => {
  return (
    <section id="projects" className="home-projects home-container">
      <h3>Testimonials</h3>
      <div className="projects-carousel">
        {reviews.map((review) => {
          return <Review key={review.id} review={review} />;
        })}
      </div>
    </section>
  );
};

export default Reviews;
