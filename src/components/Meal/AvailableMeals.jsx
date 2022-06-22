import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
// import CartContext from '../../store/cart-context';
import DUMMY_MEALS from './dummy-meals';

function AvailableMeals() {
  // eslint-disable-next-line object-curly-newline
  const meals = DUMMY_MEALS.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
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
