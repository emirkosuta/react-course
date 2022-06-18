import React from 'react';
import DUMMY_MEALS from './dummy-meals';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

function AvailableMeals() {
  // eslint-disable-next-line object-curly-newline
  const meals = DUMMY_MEALS.map(({ id, name, description, price }) => (
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
