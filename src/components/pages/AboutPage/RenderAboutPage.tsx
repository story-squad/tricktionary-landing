import React from 'react';
import { Header } from '../../common';

const RenderAboutPage = (): React.ReactElement => {
  return (
    <div className="about-page-wrapper">
      <Header />
      <div className="about-page">
        <h2>About Story Squad</h2>
        <div className="content-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            temporibus quia assumenda! At autem, similique rem, unde praesentium
            quas aliquam quis quae reprehenderit deserunt, eum itaque aliquid.
            Accusamus, natus officia.
          </p>
        </div>
        <h2>Meet the Team</h2>
      </div>
    </div>
  );
};

export default RenderAboutPage;
