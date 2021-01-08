import React from 'react';
import { testimonials } from '../../../../data';
import RenderTestimonials from './RenderTestimonials';

const TestimonialsContainer = (): React.ReactElement => {
  return <RenderTestimonials list={testimonials} />;
};

export default TestimonialsContainer;
