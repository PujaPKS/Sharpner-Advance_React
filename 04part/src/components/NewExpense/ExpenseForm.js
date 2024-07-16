import React, { useState } from 'react';
import './ExpenseForm.css';

// const initialData = {
//   enteredTitle:'',
//   enteredAmount:'',
//   enteredDate:'',
// }
//Can do in this way also if there are many objects

const ExpenseForm = () => {

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  //Making a single state instead of having single state
  
  // const  [userInput, setUserInput] = useState(initialData); //if therea re many objects then we can do like this also by making the object outside.

  const  [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',
  });


  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput, //if we dont use spread operator then only the title change will be shown and the other two keys value will be deleted. So in order to get the older input as it was empty for all  we will use spread operator.
    //   enteredTitle: e.target.value,
    // })

    //Above setUserInput has some cache
    setUserInput((prevState) => {
      return{
        ...prevState,
        enteredTitle: e.target.value,
      }
    });

    //above code is the correct way of changing one value and retaining others in multiple to One State conversion.
    // setEnteredTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // })

    //Above setUserInput has some cache
    setUserInput((prevState) => {
      return{
        ...prevState,
        enteredAmount: e.target.value,
      }
    });

    // setEnteredAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.change,
    // })

    //Above setUserInput has some cache
    setUserInput((prevState) => {
      return{
        ...prevState,
        enteredDate: e.target.value,
      }
    });

    // setEnteredDate(e.target.value);
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