import React from 'react';
import { TestimonialItem } from './testimonialsTypes';

export const testimonials: TestimonialItem[] = [
  {
    image:
      'https://uploads-ssl.webflow.com/5e417b0e2723ecadbd74ef1d/5e418e78bd635cc62feb3768_b.jpg',
    title: 'Bob, 11th Grader Teacher',
    quote: (
      <>
        <strong>Best app of the pandemic</strong>
      </>
    ),
  },
  {
    image:
      'https://uploads-ssl.webflow.com/5e417b0e2723ecadbd74ef1d/5e4792576fdb67b797b9fcee_5.jpg',
    title: 'Lauren, HR Manager',
    quote: <>This is great to use for team building! Awesome ice breaker</>,
  },
  {
    image:
      'https://uploads-ssl.webflow.com/5e417b0e2723ecadbd74ef1d/5e4792675d632545ced34e7a_6.jpg',
    title: 'Sue, Social Media Influencer',
    quote: (
      <>
        <strong>Stylish, intuitive, and so much fun!!</strong>
      </>
    ),
  },
];
