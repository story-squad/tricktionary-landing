import React from 'react';
import { TestimonialItem } from '../../../../data/testimonials/testimonialsTypes';

const TestimonialCard = (props: TestimonialItem): React.ReactElement => {
  return (
    <div className="testimonial-card">
      <div className="quote">&ldquo;{props.quote}&rdquo;</div>
      <div className="user-info">
        <img src={props.image} alt="User avatar" />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
