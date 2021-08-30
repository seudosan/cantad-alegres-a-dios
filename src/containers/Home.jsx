/* eslint-disable import/no-unresolved */
import React from 'react';
import Footer from '@components/Footer';
import Main from '@images/main.png';
import '@styles/Home.scss';

const Home = () => (
  <>
    <img className='home__img' src={Main} alt='Home' />
    <Footer />
  </>
);

export default Home;
