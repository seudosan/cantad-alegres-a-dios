import { ACTION } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.changeHomeState:
      return {
        ...state,
        homeState: action.payload,
      };

    case ACTION.changeSearchSongEntry:
      return {
        ...state,
        searchSong: {
          ...state.searchSong,
          entry: action.payload,
        },
      };

    case ACTION.changeSearchSongFilter:
      return {
        ...state,
        searchSong: {
          ...state.searchSong,
          filterBy: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
