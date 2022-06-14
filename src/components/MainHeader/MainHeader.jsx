import React from 'react';

import PropTypes from 'prop-types';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

function MainHeader(props) {
  const { onLogout } = props;
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={onLogout} />
    </header>
  );
}

MainHeader.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default MainHeader;
