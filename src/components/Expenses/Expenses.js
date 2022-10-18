import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import '.././../styles/Expenses/Expenses.css';

const Expenses = (props) => {
  const [filter, setFilter] = useState('2022');

  const filterHandler = (yearSelected) => {
    setFilter(yearSelected);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date
      .getFullYear()
      .toString() === filter;
  })

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filter}
          onChangeFilter={filterHandler} 
        />
        <ExpensesList 
          items={filteredYear} 
        />
      </Card>
    </div>

  );
}

export default Expenses;