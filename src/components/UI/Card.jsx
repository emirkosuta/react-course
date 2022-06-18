import React from 'react';
import PropType from 'prop-types';
import classes from './Card.module.css';

function Card(props) {
  const { children } = props;
  return <div className={classes.card}>{children}</div>;
}

Card.propTypes = {
  children: PropType.element.isRequired,
};

export default Card;
