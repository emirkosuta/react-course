import React from 'react';
import './ExpenseDate.css';

export const ExpenseDate = (props) => {
  const date = props.date;

  const year = date.getFullYear();
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const day = date.toLocaleString('en-GB', { day: '2-digit' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
