import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
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
        <ExpensesChart 
          expenses={filteredYear}
        />
        <ExpensesList 
          items={filteredYear} 
        />
      </Card>
    </div>

  );
}

export default Expenses;