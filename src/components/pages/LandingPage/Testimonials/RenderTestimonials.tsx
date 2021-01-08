import React from 'react';
import { TestimonialItem } from '../../../../data/testimonials/testimonialsTypes';
import TestimonialCard from './TestimonialCard';

const RenderTestimonials = (
  props: RenderTestimonialsProps,
): React.ReactElement => {
  return (
    <div className="testimonials">
      {props.list.map((item, i) => (
        <TestimonialCard {...item} key={i} />
      ))}
    </div>
  );
};

interface RenderTestimonialsProps {
  list: TestimonialItem[];
}

export default RenderTestimonials;
