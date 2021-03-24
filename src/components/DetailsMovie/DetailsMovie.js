import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../pages/css/movieDetailsPage.module.css';

const DetailsMovie = ({ movie, onButtonGoBack }) => (
  <>
    <div className={styles.imageDetails}>
      <button type="button" onClick={onButtonGoBack}>
        Return
      </button>
      <img
        width="100%"
        height="400px"
        src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
    </div>
    <div className={styles.aboutMovie}>
      <h1>{movie.title}</h1>
      <p>User score: {movie.vote_average * 10 + '%'}</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
    </div>
  </>
);

DetailsMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
  onButtonGoBack: PropTypes.func.isRequired,
};

export default DetailsMovie;
