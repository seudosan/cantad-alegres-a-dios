/* eslint-disable import/no-unresolved */
import React from 'react';
import Icon from '@icons/dove.svg';
import Search from '@icons/search.svg';
import Settings from '@icons/settings.svg';
import IconButton from '@components/IconButton';
import { Link } from 'react-router-dom';
import '@styles/Header.scss';

const Header = () => (
  <header className='header'>
    <Link className='header__home' to='/'>
      <img className='header__icon' src={Icon} alt='App Icon' />
    </Link>
    <nav className='header-nav'>
      <ul className='header-nav__list'>
        <li className='header-nav__item'>
          <IconButton icon={Search} title='Search' initialState='inactive' />
        </li>
        <li className='header-nav__item'>
          <IconButton icon={Settings} title='Settings' initialState='inactive' />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

