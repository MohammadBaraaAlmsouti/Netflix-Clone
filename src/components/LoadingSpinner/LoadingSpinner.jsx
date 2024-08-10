import React from 'react';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import classes from './LoadingSpinner.module.css';
const LoadingSpinner = () => {
  return (
    <div className={classes['loading-spinner']}>
      <img src={netflix_spinner} alt="" />
    </div>
  );
};

export default LoadingSpinner;
