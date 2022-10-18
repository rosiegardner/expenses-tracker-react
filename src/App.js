import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  { 
    id: 'e1',
    title: 'Toilet Paper',
    amount: 66.69,
    date: new Date(2022, 7, 14)
  },
  { 
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 3, 28)
  },
  {
    id: 'e3',
    title: 'New TV',
    amount: 666.69,
    date: new Date(2022, 6, 25)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 549.35,
    date: new Date( 2022, 5, 20)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [
        expense,
        ...prevExpenses
      ];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
      />
    </div>
  );
}

export default App;
