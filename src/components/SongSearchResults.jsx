/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import SongContainer from '@components/SongContainer';
import { connect } from 'react-redux';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import NotResult from '@components/NotResult';
import findSongs from '@utils/findSongs';
import '@styles/SongSearchResults.scss';

const SongSearchResults = ({ entry, filter, listOfSongs }) => {
  const [showSongs, setShowSongs] = useState(5);
  const { ref } = useIntersectionObserver(
    {
      rootMargin: '100px',
      callback: () => { setShowSongs(showSongs + 5); },
    },
  );
  const getSongs = findSongs({
    entry,
    filter,
    listOfSongs,
  });
  const showFoundSongs = getSongs().slice(0, showSongs);

  return (
    <>
      <ul className='song-search-results__list' ref={ref}>
        {
          showFoundSongs.map((song) => {
            return (
              <SongContainer
                key={song.id}
                song={song}
              />
            );
          })
        }
      </ul>
      {
        showFoundSongs.length <= 0 &&
        <NotResult />
      }
      <div ref={ref} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    entry: state.searchSong.entry,
    filter: state.searchSong.filterBy,
    listOfSongs: state.songs,
  };
};

export default connect(mapStateToProps, null)(SongSearchResults);
