import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../routes';
import imageNotFound from '../images/not-found.jpg';

const styles = {
  container: { textAlign: 'center' },
  image: { paddingTop: 100 },
};

const NotFound = () => (
  <div style={styles.container}>
    <img
      src={imageNotFound}
      alt="cat detective"
      width="700"
      height="auto"
      style={styles.image}
    />
    <p>
      <NavLink to={routes.HOME_PAGE}>Go to home page</NavLink>
    </p>
  </div>
);

export default NotFound;
