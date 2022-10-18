import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import '.././../styles/NewExpense/NewExpense.css'

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const editClickHandler = () => {
    setEditing(true);
  };

  const editExpenseClickHandler = () => {
    setEditing(false);
  }
  return (
    <div className="new-expense">
      {!editing && (
        <button onClick={editClickHandler}>Add Expense</button>
      )}
      {editing && (
        <ExpenseForm 
          onEdit={editExpenseClickHandler}
          onSaveExpenseData={saveExpenseDataHandler} 
        />
      )}
    </div>
  );
}

export default NewExpense;