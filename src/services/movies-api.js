import axios from 'axios';

const getPopularMovies = page => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=056f969dddde43269e91f1c71bc5b3e9&page=${page}`,
    )
    .then(response => response.data.results);
};

export { getPopularMovies };
