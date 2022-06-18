import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

function Meal() {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default Meal;
