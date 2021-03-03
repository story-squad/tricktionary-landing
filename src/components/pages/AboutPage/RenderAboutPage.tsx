import React from 'react';
import { Header } from '../../common';
import { TeamProfiles } from './TeamProfiles';

const infoText = `Our mission is to provide human connection through creative expression.
Help us stay indie!`;

const RenderAboutPage = (): React.ReactElement => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        {/* <h2>Our Mission</h2> */}
        {/* <div className="content-wrapper"> */}
        {/* <h3 className="mission-statement">
            Human connection through creative expression
          </h3> */}

        {/* </div> */}
        <h2>Meet Our Team</h2>
        <strong>
          <p className="info-text">{infoText}</p>
        </strong>
        <br />
        <br />
        <p>
          <a href="http://patreon.com/storysquad">support us on Patreon</a>
        </p>
        <br />
        <br />
        <TeamProfiles />
      </div>
    </div>
  );
};

export default RenderAboutPage;
