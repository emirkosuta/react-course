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

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  let expensesContent = <p>No content found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onFilterYearChanged={filterYearChangedHandler}
      />
      {expensesContent}
    </Card>
  );
};
