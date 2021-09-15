/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Icon from '@icons/dove.svg';
import Search from '@icons/search.svg';
import BackArrow from '@icons/arrow_back.svg';
import Settings from '@icons/settings.svg';
import IconButton from '@components/IconButton';
import Voice from '@icons/settings_voice.svg';
import { Link, useHistory } from 'react-router-dom';
import BrowserInput from '@components/BrowserInput';
import { changeSearchSongEntry } from '../actions';
import '@styles/Header.scss';

const STATE = {
  home: 'HOME_STATE',
  entry: 'ENTRY_STATE',
  search: 'SEARCH_STATE',
};

const Header = ({ changeSearchSongEntry, searchSongFilter }) => {
  const history = useHistory();
  const [headerState, setHeaderState] = useState(STATE.home);
  const [search, setValues] = useState('');

  const handleSearch = () => {
    setHeaderState(STATE.search);
    changeSearchSongEntry(search);
    history.push(
      {
        pathname: 'search',
        search: `?search_query=${search}&filter=${searchSongFilter}`,
      },
    );
  };

  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.blur();
      handleSearch();
    }
  };
  const handleChange = (event) => {
    setValues(event.target.value);
  };

  if (headerState === STATE.entry) {

    return (
      <header className='header'>
        <IconButton
          onClick={() => { setHeaderState(STATE.home); }}
          icon={BackArrow}
          title='Back'
          initialState='inactive'
        />
        <BrowserInput
          name='search'
          className='header__input'
          title='Search'
          onKeyPress={onEnterPress}
          onChange={handleChange}
        />
        <IconButton
          onClick={handleSearch}
          icon={Search}
          title='Search'
        />
        <IconButton icon={Voice} title='Voice Search' initialState='hidden' />
      </header>
    );
  };

  if (headerState === STATE.search) {
    return (
      <header className='header'>
        <Link
          className='header__home'
          to='/'
          onClick={() => {
            setHeaderState(STATE.home);
          }}
        >
          <img className='header__icon' src={Icon} alt='App Icon' />
        </Link>
        <BrowserInput
          name='search'
          className='header__input'
          onClick={() => { setHeaderState(STATE.entry); }}
          title='Search'
        />
        <IconButton icon={Settings} title='Settings' initialState='inactive' />
      </header>
    );
  }

  return (
    <header className='header'>
      <Link className='header__home' to='/'>
        <img className='header__icon' src={Icon} alt='App Icon' />
      </Link>
      <nav className='header-nav'>
        <ul className='header-nav__list'>
          <li className='header-nav__item'>
            <IconButton onClick={() => { setHeaderState(STATE.entry); }} icon={Search} title='Search' initialState='inactive' />
          </li>
          <li className='header-nav__item'>
            <IconButton icon={Settings} title='Settings' initialState='inactive' />
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapDispatchToProps = {
  changeSearchSongEntry,
};

const mapStateToProps = (state) => {
  return {
    searchSongFilter: state.searchSong.filterBy,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

