import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import { ExpenseItem } from './ExpenseItem';
import { Card } from '../UI/Card';
import './Expenses.css';

export const Expenses = (props) => {
  const [year, setYear] = useState('2021');

  const filterYearChangedHandler = (year) => {
    setYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onFilterYearChanged={filterYearChangedHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </Card>
  );
};
