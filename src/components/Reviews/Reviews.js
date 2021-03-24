import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getReviews } from '../../services/reviews-api';
import Spinner from '../Loader/Loader';

class Reviews extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = { reviews: [], loading: false, error: null };

  componentDidMount() {
    this.fetchReviews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location === this.props.location) {
      return;
    }
    this.fetchReviews();
  }

  fetchReviews = () => {
    this.setState({ loading: true });

    const movieId = this.props.match.params.movieId;
    getReviews(movieId)
      .then(reviews => {
        this.setState({ reviews: reviews.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { reviews, loading, error } = this.state;

    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {loading && <Spinner />}
        {reviews.length > 0 && !loading && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
        {reviews.length === 0 && !loading && (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    );
  }
}

export default Reviews;
