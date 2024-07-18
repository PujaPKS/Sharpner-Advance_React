OPTIMIZATION PART :-

We can optimise code as we are defining anonymouns functions seperately which has only one line of code so we can directly do in the keyword part itself. 
For eg. ->
    const cancelButtonClickHandler = () => {
        props.onCancel();
    };
    
    <button type='button' onClick={cancelButtonClickHandler}>Cancel</button>


The above code can be optimised by moviming anonymous function inside the tag itself.
For eg. ->
    <button type='button' onClick={() => {
        props.onCancel();
    }>Cancel</button>


" isEditing === false " is same as " !isEditing ". 
And
" isEditing === true " is same as " isEditing ".


OPTIMIZATION PART is done in this "12part".

Now in this part we are Integrating Expenses Chart of each year month wise.

urinary opersator used in this line ---> price: +enteredAmount ---> in file ExpenseForm.js
