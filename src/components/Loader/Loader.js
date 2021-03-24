import React from 'react';

import styles from './Loader.module.css';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => (
  <div className={styles.Spinner}>
    <Loader type="ThreeDots" color="grey" height={100} width={100} />
  </div>
);

export default Spinner;
