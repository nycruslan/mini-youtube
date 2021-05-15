import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <AppBar color='inherit'>
        <Toolbar>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
            alt='logo'
            style={{ width: '15%', minWidth: '5rem' }}
          />

          <form
            onSubmit={onSubmit}
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SearchIcon />
            <InputBase
              value={term}
              onChange={e => setTerm(e.target.value)}
              placeholder='Search…'
              style={{
                paddingLeft: '1rem',
                width: '70%',
                backgroundColor: 'rgba(186,186,186,0.2)',
              }}
            />
          </form>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default SearchBar;
