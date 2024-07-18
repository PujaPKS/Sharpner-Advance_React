import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2023');
  
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //function for checking filtered year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      <ExpensesChart filteredExpensesForChart={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/> 
    </Card>
  );
}

export default Expenses;
