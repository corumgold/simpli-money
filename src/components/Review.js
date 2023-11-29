import React from "react";
import { useInView } from "react-intersection-observer";

const Review = ({ review }) => {
  const { ref: imageRef, inView: imageVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="project">
      <div
        className={
          imageVisible
            ? review.id % 2 === 0
              ? "animate-image-left project-image"
              : "animate-image-right project-image"
            : "project-image"
        }
      >
        <img
          ref={imageRef}
          id="proj-image"
          src={review.image}
          alt={review.altText}
        />
      </div>
      <div className="project-details">
        <div className="project-content">
          <h3>{review.title}</h3>
          <p>&#8220;{review.description}&#8221; &mdash; {review.title}'s {review.parent}</p>
          <div className="project-tools">
            {review.tools.map((tool) => {
              return <p className="tool">{tool}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
