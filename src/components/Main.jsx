/* eslint-disable import/no-unresolved */
import React from 'react';
import Footer from '@components/Footer';
import imgMain from '@images/main-logo.svg';
import '@styles/Main.scss';

const Main = () => {
  return (
    <>
      <main className='main'>
        <img className='main__img' src={imgMain} alt='Logo de Cantad Alegres a Dios' />
      </main>
      <Footer />
    </>
  );
};

export default Main;
