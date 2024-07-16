For showing the data inside table we will have to refer the path of traveling between two files to get the access of the data to be pushed in field. So we will find path to see how to transfer data which is named as expenseData from "ExpenseForm.js" file to "ExpenseItem.js" file.

Parent to Child communication we have done it from "App.js" file to "ExpenseItem.js" file.

Now we will do Child to Parent communication from file "ExpenseForm.js" file to "App.js" file. 
This process of passing data from Child to Parent component is called "Lifting the State Up".

For "Lifting the State Up" also we will "props" only but in different way.

Data can be passed only via "props" object. So we can do either "Parent to Child" communication or "Child to Parent" communication. But we can never do "Sibling Data" communication.

We will always go to the common state which is common "Parent" for both "Child" between which we are transfering data between two "Child" component.