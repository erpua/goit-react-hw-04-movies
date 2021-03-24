import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';

import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const NotFound = lazy(() =>
  import('./pages/NotFound' /* webpackChunkName: "not-found" */),
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<h2>Downloading...</h2>}>
      <Switch>
        <Route exact path={routes.HOME_PAGE} component={HomePage}></Route>
        <Route
          path={routes.MOVIE_DETAILS_PAGE}
          component={MovieDetailsPage}
        ></Route>
        <Route path={routes.MOVIES_PAGE} component={MoviesPage}></Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
);

export default App;
