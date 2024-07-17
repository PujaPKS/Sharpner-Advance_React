import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2023');
  
  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //function for checking filtered year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // WAY-3 ----->> by using if loop and variable outside the return.
  let expensesContent = <p>No expenseFound</p>
  
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
          {filteredExpenses.length === 1 && <p>Only one expense here. Please add more</p>}
        </>
      );
    })
  }


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>

      {/* <ExpensesList items={filteredExpenses}/>  */}

      {/* In WAY-3 we will just write in return the variable name */}
      {expensesContent};

      {/* WAY-2 ----->> Using and operator */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              price={expense.price}
            />
          );
        })} */}

      {/* WAY-1 ---->> is using ternary operator */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              price={expense.price}
            />
          );
        })
      )} */}

    </Card>
  );
}

export default Expenses;
