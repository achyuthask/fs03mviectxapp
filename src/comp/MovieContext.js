// MovieContext.js
import React, { createContext, useState } from 'react';
import { fetchMovieData, fetchMovieDetails } from './api';

export const MovieContext = createContext( );

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (query) => {
    const data = await fetchMovieData(query);
    setMovies(data);
  };

  const getMovieDetails = async (imdbID) => {
    const data = await fetchMovieDetails(imdbID);
    setSelectedMovie(data);
  };

  return (
    <MovieContext.Provider value={{ movies, selectedMovie, searchMovies, getMovieDetails }}>
      {children}
    </MovieContext.Provider>
  );
};
