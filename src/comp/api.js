// api.js
const OMDB_API_KEY = '880bc194'; // Replace with your OMDB API key

export const fetchMovieData = async (searchQuery) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchQuery}`);
    const data = await response.json();
    return data.Search;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return [];
  }
};

export const fetchMovieDetails = async (imdbID) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
