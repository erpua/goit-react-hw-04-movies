import axios from 'axios';

const getMovies = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US&page=1&include_adult=false&query=${query}`,
    )
    .then(response => response.data.results);
};

export { getMovies };
