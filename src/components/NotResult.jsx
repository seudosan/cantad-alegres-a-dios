/* eslint-disable import/no-unresolved */
import React from 'react';
import VoidBox from '@images/void-box.svg';
import '@styles/NotResult.scss';

const NotResult = () => (
  <main className='not-result'>
    <img className='not-result__img' src={VoidBox} alt='Not result found' />
    <h1 className='not-result__title'>No se encontraron resultados.</h1>
    <p className='not-result__description'>Intenta usar otras palabras o cambiar el filtro.</p>
  </main>
);

export default NotResult;
