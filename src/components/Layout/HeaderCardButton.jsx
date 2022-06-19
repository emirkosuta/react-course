import React, { useContext } from 'react';
import PropType from 'prop-types';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCardButton(props) {
  const { onClick } = props;
  const cartContext = useContext(CartContext);
  return (
    <button onClick={onClick} type="button" className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{cartContext.totalAmount}</span>
    </button>
  );
}

HeaderCardButton.propTypes = {
  onClick: PropType.func.isRequired,
};

export default HeaderCardButton;
