import React from 'react';
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';

export const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.tittle}}</h2>
        <div className="expense-item__price">${props.expense.price}</div>
      </div>
    </Card>
  );
};
