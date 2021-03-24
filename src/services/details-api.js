import axios from 'axios';

const getMovieDetails = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/
      ${movieId}?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US`,
    )
    .then(response => response.data);
};

export { getMovieDetails };
