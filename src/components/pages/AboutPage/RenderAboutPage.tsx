import React from 'react';
import { Header } from '../../common';
import { TeamProfiles } from './TeamProfiles';

const RenderAboutPage = (): React.ReactElement => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        <h2>Our Mission:</h2>
        <div className="content-wrapper">
          <p className="mission-statement">Get kids writing!</p>
        </div>
        <h2>Meet the Team</h2>
        <TeamProfiles />
      </div>
    </div>
  );
};

export default RenderAboutPage;
