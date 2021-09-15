/* eslint-disable react/no-danger */
/* eslint-disable import/no-unresolved */
import React from 'react';
import '@styles/SongContainer.scss';

const SongContainer = ({ song }) => {
  const { id, title, content } = song;

  const createMarkup = () => {
    return { __html: content };
  };

  return (
    <li className='song-card'>
      <div className='song-card__identity'>
        <h3>{title}</h3>
        <h3>{id}</h3>
      </div>
      <div className='song-card__content' dangerouslySetInnerHTML={createMarkup()} />
    </li>
  );
};

export default SongContainer;
