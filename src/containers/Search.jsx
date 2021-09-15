/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import SongSearchFilters from '@components/SongSearchFilters';
import SongSearchResults from '@components/SongSearchResults';
import { connect } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';
import { changeSearchSongEntry, changeSearchSongFilter } from '../actions';
import { SEARCH_SONG } from '../store';

const useQuery = () => new URLSearchParams(useLocation().search);

const Search = (props) => {
  const { searchEntry, searchFilter, changeSearchSongEntry, changeSearchSongFilter } = props;
  const query = useQuery(),
    querySearch = query.get('search_query'),
    queryFilter = query.get('filter'),
    filtersAvailable = Object.values(SEARCH_SONG.filterBy),
    checkFilter = filtersAvailable.includes(queryFilter) ? queryFilter : undefined;

  if (querySearch === null) {
    return (
      <Redirect
        to={{
          pathname: '/search',
          search: '?search_query=',
        }}
      />
    );
  };

  useEffect(() => {
    if (querySearch && querySearch !== searchEntry) {
      changeSearchSongEntry(querySearch);
    };
  });

  useEffect(() => {
    if (checkFilter && queryFilter !== searchFilter) {
      changeSearchSongFilter(checkFilter);
    };
  });

  return (
    <main className='search'>
      <SongSearchFilters />
      <SongSearchResults />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    listOfSongs: state.songs,
    searchEntry: state.searchSong.entry,
    searchFilter: state.searchSong.filterBy,
  };
};

const mapDispatchToProps = {
  changeSearchSongEntry,
  changeSearchSongFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
