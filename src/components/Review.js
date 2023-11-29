import React from "react";
import { useInView } from "react-intersection-observer";

const Review = ({ review }) => {
  const { ref: reviewRef, inView: reviewVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={reviewRef}
      className={
        reviewVisible
          ? review.id % 2 === 0
            ? "animate-review-left project"
            : "animate-review-right project"
          : "project"
      }
    >
      {" "}
      <div className="project-details">
        <div className="project-content">
          <h3>{review.name}</h3>
          <p>"{review.message}"</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
