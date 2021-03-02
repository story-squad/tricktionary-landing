import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SEO } from './components/common';
import { AboutPage } from './components/pages/AboutPage';
import { LandingPage } from './components/pages/LandingPage';
const App = (): React.ReactElement => {
  return (
    <div className="App">
      <SEO />
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        {/* <Route exact path="/products" component={ProductsPage} /> */}
        {/* Private Routes */}
        {/* Fallback redirect to main app homepage! Change the 'to' property after setting up routes. */}
        <Route path="/" component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
};

export default App;
