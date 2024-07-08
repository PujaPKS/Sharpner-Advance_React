import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  // //want to change title on click
  // let title = props.title; // for howering on title

  // function buttonClickHandler(event){
  //   title = 'New Title';
  //   console.log(title);
  // }

  
  // On doing above part on clicking the button the value ius being printed but doesnt changes on page.

  //So to reflect changes on page we use the hook useState which has 2 arguments.
  //1. on what we want to apply change we use that.
  //2. the function.

  const [title, setTitle] = useState(props.title);

  function buttonClickHandler(event){
    setTitle('New Title');
  }

  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={buttonClickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
