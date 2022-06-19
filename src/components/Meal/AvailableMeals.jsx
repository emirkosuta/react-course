import React, { useContext } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import CartContext from '../../store/cart-context';

function AvailableMeals() {
  const cartContext = useContext(CartContext);
  // eslint-disable-next-line object-curly-newline
  const meals = cartContext.items.map(({ id, name, description, price }) => (
    <MealItem
      key={id}
      id={id}
      name={name}
      description={description}
      price={price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
