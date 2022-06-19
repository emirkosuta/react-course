import React from 'react';
import PropType from 'prop-types';
import classes from './Card.module.css';

function Card(props) {
  const { children, className } = props;
  return <div className={`${classes.card} ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropType.node.isRequired,
  className: PropType.string,
};

Card.defaultProps = {
  className: '',
};

export default Card;
