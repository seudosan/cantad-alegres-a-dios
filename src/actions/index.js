/* eslint-disable import/prefer-default-export */
export const ACTION = {
  changeHomeState: 'CHANGE_HOME_STATE',
  changeSearchSongEntry: 'CHANGE_SEARCH_ENTRY',
  changeSearchSongFilter: 'CHANGE_SEARCH_FILTER',
};

export const changeHomeState = (payload) => ({
  type: ACTION.changeHomeState,
  payload,
});

export const changeSearchSongEntry = (payload) => ({
  type: ACTION.changeSearchSongEntry,
  payload,
});

export const changeSearchSongFilter = (payload) => ({
  type: ACTION.changeSearchSongFilter,
  payload,
});
