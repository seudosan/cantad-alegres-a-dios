import { SEARCH_SONG } from '../store';

const findSongs = ({ entry, filter, listOfSongs }) => {
  const searchEntry = entry.toLowerCase();
  const { all, number, title, content } = SEARCH_SONG.filterBy;
  let condition;
  let song = { };

  switch (filter) {
    case all:
      condition = () => (
        song.id.toString().includes(searchEntry) ||
        song.title.toLowerCase().includes(searchEntry) ||
        song.content.toLowerCase().includes(searchEntry)
      );
      break;

    case number:
      condition = () => (song.id.toString().includes(searchEntry));
      break;

    case title:
      condition = () => (song.title.toLowerCase().includes(searchEntry));
      break;

    case content:
      condition = () => (song.content.toLowerCase().includes(searchEntry));
      break;

    default:
      console.error('INVALID CONDITION');
      break;
  }

  return function () {
    const foundSongs = [];

    for (let i = 0; i < listOfSongs.length; i++) {
      song = listOfSongs[i];

      if (condition()) {
        foundSongs.push(song);
      }
    };

    return foundSongs;
  };
};

export default findSongs;
