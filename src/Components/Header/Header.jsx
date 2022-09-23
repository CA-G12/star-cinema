import React from 'react'
import { FaSearch } from 'react-icons/fa';

import './Header.css';

function Header(props) {
  const { search, setSearch, setHowItWorks } = props;

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className='header'>
      <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dwLj789Csou34KUbDv_jXNuOCxSHep-gqA&usqp=CAU'
        className='header-image'
        alt='movies'
        onClick={() => {window.location.reload()}}
      />
      <fieldset className='search-box'>
        <input 
          type='search'
          name='search'
          id='search'
          value={search}
          placeholder='Search for movies by name ...'
          onInput={handleInput}
        />
        <FaSearch className="search" />
      </fieldset>
      <button
        type='button'
        className='how-it-works'
        onClick={setHowItWorks}
      >
          How it works
        </button>
    </header>
  )
}

export default Header