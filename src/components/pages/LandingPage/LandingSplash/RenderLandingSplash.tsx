import React from 'react';
import rollerCoaster from '../../../../assets/roller-coaster.gif';
import TypingText from './TypingText';

const RenderLandingSplash = (): React.ReactElement => {
  return (
    <div className="landing-splash">
      <TypingText />
      <img src={rollerCoaster} alt="People in a zoom room being stupid" />
    </div>
  );
};

export default RenderLandingSplash;
