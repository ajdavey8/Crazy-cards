import React from 'react';
import '../../assets/styles/loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="loader__icon">
      <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
    </div>
    <h3 className="loader__text">Loading...</h3>
  </div>
);

export default Loader;
