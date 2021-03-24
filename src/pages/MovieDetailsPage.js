import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import DetailsMovie from '../components/DetailsMovie';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import Spinner from '../components/Loader';

import { getMovieDetails } from '../services/details-api';

import styles from './css/movieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = { movies: null, error: null, loading: false };

  componentDidMount() {
    this.fetchSelectedMovie();
  }

  fetchSelectedMovie = () => {
    const movieId = this.props.match.params.movieId;
    this.setState({ loading: true });
    getMovieDetails(movieId)
      .then(movies => {
        this.setState({ movies });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      this.props.history.push(state.from);
    }
  };

  render() {
    const { movies, error, loading } = this.state;
    const { match, location } = this.props;

    return (
      <main>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {loading && <Spinner />}
        {movies && !loading && (
          <div className={styles.wrapper}>
            <DetailsMovie movie={movies} onButtonGoBack={this.handleGoBack} />
            <h4>Additional information</h4>
            <ul>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: location.state.from },
                  }}
                  className={styles.link}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location.state.from },
                  }}
                  className={styles.link}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Route path={`${match.path}/cast`} component={Cast}></Route>
            <Route path={`${match.path}/reviews`} component={Reviews}></Route>
          </div>
        )}
      </main>
    );
  }
}

export default MovieDetailsPage;
