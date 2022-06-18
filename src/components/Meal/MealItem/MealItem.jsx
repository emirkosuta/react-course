import React from 'react';
import PropType from 'prop-types';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem(props) {
  // eslint-disable-next-line object-curly-newline
  const { id, name, description, price: priceProp } = props;
  const price = `$${priceProp.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}

MealItem.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  price: PropType.string.isRequired,
};

export default MealItem;
