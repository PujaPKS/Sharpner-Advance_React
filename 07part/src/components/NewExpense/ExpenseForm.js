import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label htmlFor='title'>Title</label>
        <input type ="text" value={enteredTitle} id='title' onChange={titleChangeHandler}/>
      </div>

      <div className='new-expense__control'>
        <label htmlFor='amount'>Amount</label>
        <input type ="number" value={enteredAmount} id='amount' onChange={amountChangeHandler}/>
      </div>
      <div className='new-expense__control'>
        <label htmlFor='date'>Date</label>
        <input type ="date" value={enteredDate} id='date' min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
      </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;