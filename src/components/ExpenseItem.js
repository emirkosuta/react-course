import React from 'react';
import './ExpenseItem.css';

export const ExpenseItem = () => {
  const expenseDate = new Date();
  const expenseTitle = 'Car insurance';
  const expensePrice = 220;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
};
