import './App.css'
import React from 'react';
import { MovieProvider } from './comp/MovieContext';
import SearchMovies from './comp/SearchMovies';

import MovieDetails from './comp/MovieDetails';
import MovieList from './comp/movielist';



const App = () => {
  return (
    <MovieProvider>
      <SearchMovies />
      <MovieList />
      <MovieDetails />
    </MovieProvider>
  );
};

export default App;
