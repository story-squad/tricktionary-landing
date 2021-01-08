import React from 'react';
import { TestimonialItem } from './testimonialsTypes';

export const testimonials: TestimonialItem[] = [
  {
    image:
      'https://uploads-ssl.webflow.com/5e417b0e2723ecadbd74ef1d/5e418e78bd635cc62feb3768_b.jpg',
    title: 'Bob, father of a 6th and 3rd Grader',
    quote: (
      <>
        With Story Squad, <strong>my kids aren&apos;t vegging out</strong> all
        day to <em>Youtube</em> or <em>Fortnite</em> during{' '}
        <span>COVID-19</span>.
      </>
    ),
  },
  {
    image:
      'https://uploads-ssl.webflow.com/5e417b0e2723ecadbd74ef1d/5e4792576fdb67b797b9fcee_5.jpg',
    title: 'Lauren, mother of a 4th Grader',
    quote: (
      <>
        When Michael shows me his latest story, I can&apos;t tell you{' '}
        <strong>how proud I feel</strong>.
      </>
    ),
  },
  {
    image:
      'https://uploads-ssl.webflow.com/5e417b0e2723ecadbd74ef1d/5e4792675d632545ced34e7a_6.jpg',
    title: 'Sue, mother to twins in 5th Grade',
    quote: (
      <>
        My boys are sharpening their <strong>language arts skills</strong> while
        other kids are languishing at home.
      </>
    ),
  },
];
