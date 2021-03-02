import React from 'react';
import { Header } from '../../common';
import { TeamProfiles } from './TeamProfiles';

const infoText = `link to our patreon`;

const RenderAboutPage = (): React.ReactElement => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        <h2>Our Mission</h2>
        <div className="content-wrapper">
          <h3 className="mission-statement">
            Human connection through creative expression
          </h3>
          <p className="info-text">{infoText}</p>
        </div>
        <h2>Meet Our Team</h2>
        <TeamProfiles />
      </div>
    </div>
  );
};

export default RenderAboutPage;
