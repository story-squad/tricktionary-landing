import React from 'react';
import { Header } from '../../common';
import { LandingSplash } from './LandingSplash';
import { Testimonials } from './Testimonials';

const RenderLandingPage = (): React.ReactElement => {
  return (
    <div className="landing-page-wrapper">
      <Header />
      <div className="landing-page">
        <LandingSplash />
        <Testimonials />
      </div>
    </div>
  );
};

export default RenderLandingPage;
