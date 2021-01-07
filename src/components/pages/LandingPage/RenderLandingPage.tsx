import React from 'react';
import { Header } from '../../common';
import { LandingSplash } from './LandingSplash';

const RenderLandingPage = (): React.ReactElement => {
  return (
    <div className="landing-page-wrapper">
      <Header />
      <div className="landing-page">
        <LandingSplash />
      </div>
    </div>
  );
};

export default RenderLandingPage;
