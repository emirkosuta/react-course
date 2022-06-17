import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

function HeaderCardButton() {
  return (
    <button type="button" className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>4</span>
    </button>
  );
}

export default HeaderCardButton;
