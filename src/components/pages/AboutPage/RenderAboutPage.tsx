import React from 'react';
import { Header } from '../../common';
import { TeamProfiles } from './TeamProfiles';

const infoText = `As a 6th Grade teacher, Graig watched the way Fortnite and Tiktok
were structuring his students' lives the moment the bell rang. He
designed Story Squad to be an alternative to apps heavy on
screen-time that aim to maximize a user's time-on-device; instead,
Story Squad uses small servings of screen-time to maximize the time
a kid spends in "imagination-mode" with a pencil in hand writing
adventures and building worlds.`;

const RenderAboutPage = (): React.ReactElement => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        <h2>Our Mission</h2>
        <div className="content-wrapper">
          <h3 className="mission-statement">Get kids writing!</h3>
          <p className="info-text">{infoText}</p>
        </div>
        <h2>Meet the Team</h2>
        <TeamProfiles />
      </div>
    </div>
  );
};

export default RenderAboutPage;
