import React from 'react';
import { ExpenseItem } from './components/ExpenseItem';

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expense={expenses[0]} />
    </div>
  );
}

export default App;
