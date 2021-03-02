import React from 'react';
// import fdscBanner from '../../../assets/fdsc-banner.png';
// import tricktionaryBanner from '../../../assets/tricktionary-banner.png';
import { Header } from '../../common';

const RenderProductsPage = (): React.ReactElement => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        <h2>Check out our Apps!</h2>
        <div className="content-wrapper">
          {/* <img src={fdscBanner}></img> */}
        </div>
        <div className="content-wrapper">
          {/* <img src={tricktionaryBanner}></img> */}
        </div>
      </div>
    </div>
  );
};

export default RenderProductsPage;
