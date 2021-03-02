import React from 'react';
import { Header } from '../../common';
import { TeamProfiles } from './TeamProfiles';

const infoText = `Story Squad is a team of tech nerds that want to help people express themselves creatively and connect with community. We've built a few different projects, below you can see our Tricktionary team. Tricktionary is a product designed to help start off video meetings by focusing everyone and giving participants a creative outlet. We have a strong commitment to never optimize for "time-in-app", which makes it hard to raise funds. If you'd like to help us keep building, you can support us on patreon.`;

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
          <br />
          <br />
          <p>
            <a href="http://patreon.com/storysquad">Support the team</a>
          </p>
        </div>
        <h2>Meet Our Team</h2>
        <TeamProfiles />
      </div>
    </div>
  );
};

export default RenderAboutPage;
