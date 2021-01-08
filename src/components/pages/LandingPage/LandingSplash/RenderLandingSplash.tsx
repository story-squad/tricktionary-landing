import React from 'react';
import TypingText from './TypingText';

const RenderLandingSplash = (): React.ReactElement => {
  return (
    <div className="landing-splash">
      <TypingText />
      <img
        src="https://uploads-ssl.webflow.com/5e417b0e2723ecadbd74ef1d/5e6eb8bea4e7ff6e4915ad4e_img06.jpeg"
        alt="Image of two young boys doing their secret handshake"
      />
    </div>
  );
};

export default RenderLandingSplash;
