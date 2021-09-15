/* eslint-disable import/no-unresolved */
import React from 'react';
import Main from '@components/Main';
import { connect } from 'react-redux';
import '@styles/Home.scss';

const Home = () => {

  return (
    <Main />
  );

};

export default connect(null, null)(Home);
