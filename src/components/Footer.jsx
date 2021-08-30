/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        <strong>Nota: </strong>
        Este himnario digital fue desarrollado como soporte para facilitar la búsqueda de himnos de manera rápida y accesible promoviendo así el aprendizaje de los mismos, por lo tanto no se pretende sustituir el uso del himnario convencional entre nuestras asambleas.
      </p>
      <p>
        Si tiene algún problema o duda, por favor comuníquese en
        <strong> Ajustes </strong>
        &gt;
        <strong> Ayuda </strong>
        &gt;
        <strong> Contactar </strong>
        .
      </p>
    </footer>
  );
};

export default Footer;
