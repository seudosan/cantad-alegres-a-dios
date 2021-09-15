/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/Button.scss';

const Button = ({ content, active, onClick }) => {
  const checkActive = active ? 'button--active' : '';

  return (
    <button
      type='button'
      className={`button ${checkActive}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
