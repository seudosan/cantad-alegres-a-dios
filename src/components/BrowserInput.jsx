import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const BrowserInput = ({ className, onKeyPress, onChange, onClick, title, searchEntry }) => {
  const inputRef = React.createRef();
  const input = (
    <input
      ref={inputRef}
      className={className}
      type='search'
      onKeyPress={onKeyPress}
      onChange={onChange}
      onClick={onClick}
      title={title}
      autoComplete='off'
    />
  );

  useEffect(() => {
    const input = inputRef.current;
    input.focus();
  }, []);

  return input;
};

const mapStateToProps = (state) => {
  return {
    searchEntry: state.searchSong.entry,
  };
};

export default connect(mapStateToProps, null)(BrowserInput);
