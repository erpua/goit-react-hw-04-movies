import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getPopularMovies } from '../services/movies-api';
import Spinner from '../components/Loader';
import Button from '../components/Button';

import routes from '../routes';
import styles from './css/homePage.module.css';

class HomePage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = {
    movies: [],
    page: 1,
    error: null,
    loading: false,
  };

  componentDidMount() {
    this.fetchPopularMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.movies !== prevState.movies) {
      this.scroller();
    }
  }

  fetchPopularMovies = () => {
    const { page } = this.state;

    this.setState({ loading: true });

    getPopularMovies(page)
      .then(movies =>
        this.setState(state => ({
          movies: [...state.movies, ...movies],
          page: state.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  scroller = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { movies, loading, error } = this.state;

    return (
      <main>
        <h1 className={styles.title}>Trending today</h1>
        {error && <p>Whoops, something went wrong: {error.massage}</p>}
        {loading && <Spinner />}
        {movies.length > 0 && (
          <ul className={styles.filmMenu}>
            {movies.map(({ id, poster_path, media_type }) => (
              <li key={id} className={styles.filmMenuList}>
                <NavLink
                  style={{ display: 'block', height: 300 }}
                  to={{
                    pathname: `${routes.MOVIES_PAGE}/${id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={media_type}
                    style={{ height: 300, objectFit: 'cover' }}
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        {movies.length > 0 && !loading && (
          <Button clickButton={this.fetchPopularMovies} />
        )}
      </main>
    );
  }
}

export default HomePage;
