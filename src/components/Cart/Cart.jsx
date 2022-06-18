import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart() {
  const cartItems = (
    <ul>
      {[{ name: 'Paella', amount: 2, price: 10.9 }].map((cart) => (
        <li>{cart.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
