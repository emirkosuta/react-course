import React, { useContext } from 'react';
import PropType from 'prop-types';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCardButton(props) {
  const { onClick } = props;
  const cartContext = useContext(CartContext);
  const numberOfItems = cartContext.items.reduce(
    (prev, curr) => prev + +curr.amount,
    0,
  );
  return (
    <button onClick={onClick} type="button" className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

HeaderCardButton.propTypes = {
  onClick: PropType.func.isRequired,
};

export default HeaderCardButton;
