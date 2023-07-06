// SearchMovies.js
import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';
import './SearchMovie.css';

const SearchMovies = () => {
  const { searchMovies } = useContext(MovieContext);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovies;
