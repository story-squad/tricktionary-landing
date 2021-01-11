import React from 'react';
import { Header } from '../../common';

const RenderAboutPage = (): React.ReactElement => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        <h2>About the Team</h2>
      </div>
    </div>
  );
};

export default RenderAboutPage;
