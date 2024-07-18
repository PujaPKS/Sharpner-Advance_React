import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
    if(props.items.length === 0){
        return(
            <h2 className='expenses-list__fallback'>No expenses found</h2>
        )
    }

    return(
    <ul className='expense-list'>
        {props.items.map((item) => {
        return (
            <ExpenseItem
            key={item.id}
            date={item.date}
            price={item.price}
            title={item.title}
            />
        );
        })}
    </ul>
    )
}

export default ExpensesList