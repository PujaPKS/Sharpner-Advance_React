import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  //useState used for changing Title
  const [enteredTitle, setEnteredTitle] = useState('');
  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredTitle(e.target.value); //here value entered by use is pushed on main page
  }

  //useState used for changing amount
  const [enteredAmount, setEnteredAmount] = useState('');
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  //useState used for changing date
  const [enteredDate, setEnteredDate] = useState('');
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  return (
    <form>
      <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label htmlFor='title'>Title</label>
        <input type ="text" id='title' onChange={titleChangeHandler}/>
      </div>

      <div className='new-expense__control'>
        <label htmlFor='amount'>Amount</label>
        <input type ="number" id='amount' onChange={amountChangeHandler}/>
      </div>
      <div className='new-expense__control'>
        <label htmlFor='date'>Date</label>
        <input type ="date" id='date' min="2023-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
      </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;