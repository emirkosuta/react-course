import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { Card } from '../UI/Card';
import './Expenses.css';

export const Expenses = (props) => {
  const [year, setYear] = useState('2021');

  const filterYearChangedHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <ul>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onFilterYearChanged={filterYearChangedHandler}
        />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </ul>
  );
};
