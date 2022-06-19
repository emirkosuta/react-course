import React, { useContext, useRef } from 'react';
import PropType from 'prop-types';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

function MealItemForm(props) {
  const { id } = props;
  const cartContext = useContext(CartContext);

  const addItemToCartHandler = () => {
    cartContext.addItemToCart(item);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount${id}`,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="button" onClick={addItemToCartHandler(id)}>
        + Add
      </button>
    </form>
  );
}

MealItemForm.propTypes = {
  id: PropType.string.isRequired,
};

export default MealItemForm;
