import React from 'react'
import { FaSearch } from 'react-icons/fa';

function Header(props) {
  const { search, setSearch } = props;

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className='header'>
      <input 
        type='search'
        name='search'
        id='search'
        value={search}
        placeholder='Search for movies by name ...'
        onInput={handleInput}
      />
      <FaSearch icon="search" />
    </header>
  )
}

export default Header