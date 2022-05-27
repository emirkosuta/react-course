import React, { useState } from 'react';
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';

export const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const onClickHandler = () => {
    setTitle('Changed!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.price}</div>
        <button onClick={onClickHandler}>Button</button>
      </div>
    </Card>
  );
};
