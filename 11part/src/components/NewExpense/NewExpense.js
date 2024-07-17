import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const[isEditing, setIsEditing] = useState(false); //This line states that initially we are considering that we are not editing the form.
  //Initial state is false. So when the initial state is false we dont want to render the form. We want to render the button.

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData, id: Math.random().toString()};
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false); // this function is made false so that after adding the form collapse and alsom collapse even on just clicking the button also of the expanded form.
  }

  const buttonClickHandler = () => {
    setIsEditing(true);
  }

  const cancelFormHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
        {isEditing === false && (
          <button type='button' onClick={buttonClickHandler}>
            Add Expense
          </button>
        )}

        {isEditing === true && (
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelFormHandler}/>
        )}
      
    </div>
  )
}

export default NewExpense