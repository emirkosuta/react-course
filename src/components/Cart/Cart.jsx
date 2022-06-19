/* eslint-disable object-curly-newline */
import React from 'react';
import PropType from 'prop-types';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart(props) {
  const { onHideModal } = props;

  const cartItems = (
    <ul>
      {[{ id: '1', name: 'Paella', amount: 2, price: 10.9 }].map((cart) => (
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
        <span>35.62</span>
      </div>
    </Modal>
  );
}

Cart.propTypes = {
  onHideModal: PropType.func.isRequired,
};

export default Cart;
