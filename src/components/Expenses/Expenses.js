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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onFilterYearChanged={filterYearChangedHandler}
      />
      {filteredExpenses.length === 0 && <p>No content found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
    </Card>
  );
};
