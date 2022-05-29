import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [hideForm, setHideForm] = useState(true);

  const saveExpenseDataHandler = (enteredEpenseData) => {
    const expenseData = {
      ...enteredEpenseData,
      id: Math.random().toString(12),
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setHideForm(false);
  };
  return (
    <div className="new-expense">
      {hideForm && (
        <button onClick={addNewExpenseHandler} type="button">
          Add new expense
        </button>
      )}
      {!hideForm && (
        <ExpenseForm
          onHideForm={() => setHideForm(true)}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
