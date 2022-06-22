import React, { useContext } from 'react';
import PropType from 'prop-types';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
  // eslint-disable-next-line object-curly-newline
  const { id, name, description, price: priceProp } = props;
  const price = priceProp.toFixed(2);

  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    // eslint-disable-next-line object-curly-newline
    cartContext.addItemToCart({ id, name, description, price, amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price}`}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddItem={addItemToCartHandler} />
      </div>
    </li>
  );
}

MealItem.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  price: PropType.number.isRequired,
};

export default MealItem;
