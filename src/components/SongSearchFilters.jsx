/* eslint-disable import/no-unresolved */
import React from 'react';
import Button from '@components/Button';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router';
import { changeSearchSongFilter } from '../actions';
import { SEARCH_SONG } from '../store';
import '@styles/SongSearchFilters.scss';

const useQuery = () => new URLSearchParams(useLocation().search);

const SongSearchFilters = (props) => {
  const { searchFilter, changeSearchSongFilter } = props;
  const { all, number, title, content } = SEARCH_SONG.filterBy;
  const query = useQuery(),
    history = useHistory(),
    querySearch = query.get('search_query');

  const checkActiveFilter = (filter) => (filter === searchFilter ? 'true' : '');

  return (
    <section className='song-search-filters'>
      <span className='song-search-filters__description'>Buscar por:</span>
      <Button
        active={checkActiveFilter(all)}
        content='Todo'
        onClick={() => {
          changeSearchSongFilter(all);
          history.push(
            {
              pathname: 'search',
              search: `?search_query=${querySearch}&filter=${all}`,
            },
          );
        }}
      />
      <Button
        active={checkActiveFilter(number)}
        content='Número'
        onClick={() => {
          changeSearchSongFilter(number);
          history.push(
            {
              pathname: 'search',
              search: `?search_query=${querySearch}&filter=${number}`,
            },
          );
        }}
      />
      <Button
        active={checkActiveFilter(title)}
        content='Título'
        onClick={() => {
          changeSearchSongFilter(title);
          history.push(
            {
              pathname: 'search',
              search: `?search_query=${querySearch}&filter=${title}`,
            },
          );
        }}
      />
      <Button
        active={checkActiveFilter(content)}
        content='Contenido'
        onClick={() => {
          changeSearchSongFilter(content);
          history.push(
            {
              pathname: 'search',
              search: `?search_query=${querySearch}&filter=${content}`,
            },
          );
        }}
      />

    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    searchFilter: state.searchSong.filterBy,
  };
};

const mapDispatchToProps = {
  changeSearchSongFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSearchFilters);
