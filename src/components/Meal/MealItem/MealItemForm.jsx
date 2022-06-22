import React, { useRef } from 'react';
import PropType from 'prop-types';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm(props) {
  const { id, onAddItem } = props;
  const amountRef = useRef();

  const addItemToCartHandler = (event) => {
    event.preventDefault();

    onAddItem(+amountRef.current.value);
  };
  return (
    <form className={classes.form} onSubmit={addItemToCartHandler}>
      <Input
        ref={amountRef}
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
      <button type="submit">+ Add</button>
    </form>
  );
}

MealItemForm.propTypes = {
  id: PropType.string.isRequired,
  onAddItem: PropType.func.isRequired,
};

export default MealItemForm;
