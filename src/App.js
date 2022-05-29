import React from 'react';
import { Expenses } from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const addExpenseDataHandler = (expenseData) => {
    console.log(expenseData);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses />
    </div>
  );
}

export default App;
