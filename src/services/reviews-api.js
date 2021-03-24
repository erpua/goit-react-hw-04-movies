import axios from 'axios';

const getReviews = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=056f969dddde43269e91f1c71bc5b3e9&language=en-US&page=1`,
    )
    .then(response => response.data);
};

export { getReviews };
