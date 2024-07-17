In form we want that on clicking Add Expense button the form expands and after adding the form gets collapsed. And even on adding cancel button also the form gets collapsed.

In NewExpense.js file we used useState hook to make it in a way that if we are not in editing mode then show only "add expense" button , else show Full form .

And in NewExpense.js file on clicking the button we will render the state to be true. So as the state is true now so the form will expand.

In NewExpense.js file the add expense button function after adding the data will also set the editing function to false so that the form closes after adding some data and also after clicking add expense button on the expanded form.

Added Cancel button in ExpenseForm.js file and will apply the functions on the "cancel" button.


In ExpenseForm.js file we have added a cancel button and the function to it which will call the function of onCancel defined inside <ExpenseForm> tag inside the "NewExpense.js" file.

In "NewExpense.js" file we have a function of onCancel in <ExpenseForm> tag which will be set function of useState to false after clicking the button. So that the form closes. 
And we will evaluate the setEdited part from "NewExpense.js" file in the "ExpenseForm.js" file.

In "ExpenseForm.js" file we have function of cancel button also which will take the evaluated part from "NewExpense.js" file using props.


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
