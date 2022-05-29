import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { Card } from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

export const Expenses = (props) => {
  const [year, setYear] = useState('2022');

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};
