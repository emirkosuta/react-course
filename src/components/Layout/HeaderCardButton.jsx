import React from 'react';
import PropType from 'prop-types';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

function HeaderCardButton(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} type="button" className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>4</span>
    </button>
  );
}

HeaderCardButton.propTypes = {
  onClick: PropType.func.isRequired,
};

export default HeaderCardButton;
