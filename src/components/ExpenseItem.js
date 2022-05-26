import React from 'react';
import './ExpenseItem.css';

export const ExpenseItem = (props) => {
  console.log(props);
  const year = props.expense.date.getFullYear();
  const month = props.expense.date.toLocaleString('en-GB', { month: 'long' });
  const day = props.expense.date.toLocaleString('en-GB', { day: '2-digit' });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.price}</div>
      </div>
    </div>
  );
};
