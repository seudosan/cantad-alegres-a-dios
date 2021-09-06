/* eslint-disable import/no-unresolved */
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@containers/Home';
import Search from '@containers/Search';
import NotFound from '../containers/NotFound';
import '@csstools/normalize.css';
import '../assets/styles/App.scss';

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/not-found' component={NotFound} />
        <Redirect to='/not-found' />
      </Switch>
    </Layout>
  </HashRouter>
);

export default App;
