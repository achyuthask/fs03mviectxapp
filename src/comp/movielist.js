// MovieList.js
import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';


const MovieList = () => {
  const { movies, getMovieDetails } = useContext(MovieContext);

  const handleMovieClick = (imdbID) => {
    getMovieDetails(imdbID);
    // Redirect to another page to show complete movie details
  };

  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {movies.map((movie) => (
        <div key={movie.imdbID} onClick={() => handleMovieClick(movie.imdbID)}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        

          <img src={movie.Poster} alt={movie.Title} />
         
          
        </div>
      ))}
    </div>
  );
};

export default MovieList;
