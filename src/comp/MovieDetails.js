// MovieDetails.js
import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const MovieDetails = () => {
  const { selectedMovie } = useContext(MovieContext);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{selectedMovie.Title}</h2>
      <p>{selectedMovie.Plot}</p>
      <p>Director: {selectedMovie.Director}</p>
      <p>Actors: {selectedMovie.Actors}</p>
      {/* Display other movie details as needed */}
    </div>
  );
};

export default MovieDetails;
