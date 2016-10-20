import React                 from 'react';
import page2Component              from '../components/page2Component';
import SayHalloComponent              from '../components/sayHalloComponent';
import { Router, Route, useRouterHistory } from 'react-router';
import createHistory from 'history/lib/createHashHistory'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const routes = (
  <Router history={appHistory}>
    <Route path='app' >
      <Route path='welcome' component={ SayHalloComponent } />
      <Route path='page2' component={ page2Component } />
    </Route>
  </Router>
);

export default routes;