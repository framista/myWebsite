import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/pages/not-found';
import HomePage from '../components/pages/home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
