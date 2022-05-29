import React, { useState } from 'react';
import { Expenses } from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: 'Car insurance',
    price: 200,
    date: new Date(2021, 11, 5),
  },
  {
    id: 2,
    title: 'Gilette',
    price: 3.5,
    date: new Date(2021, 12, 5),
  },
  {
    id: 3,
    title: 'React course',
    price: 45,
    date: new Date(2022, 26, 5),
  },
  {
    id: 4,
    title: 'Bensedin',
    price: 6,
    date: new Date(2022, 26, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseDataHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
      // return {
      //   ...prevState,
      //   expenseData,
      // };
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
