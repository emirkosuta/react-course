/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import PropType from 'prop-types';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

function Cart(props) {
  const { onHideModal } = props;
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul>
      {cartContext.items.map((cart) => (
        <li key={cart.id}>{cart.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal
      title="Your cart"
      okButtonTitle="Order"
      onOkButton={onHideModal}
      onHideModal={onHideModal}
    >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartContext.totalAmount.toFixed(2)}</span>
      </div>
    </Modal>
  );
}

Cart.propTypes = {
  onHideModal: PropType.func.isRequired,
};

export default Cart;
