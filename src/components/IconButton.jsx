/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/IconButton.scss';

const STATE = ['active', 'inactive', 'hidden'];

const IconButton = ({ icon, alt, title, initialState, onClick }) => {
  const checkState = STATE.includes(initialState) ? initialState : 'active';

  return (
    <button
      type='button'
      onClick={onClick}
      className={`icon-button icon-button--${checkState}`}
      title={title}
    >
      <img className='icon-button__img' src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
