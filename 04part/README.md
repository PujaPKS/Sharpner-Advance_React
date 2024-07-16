If data is related to same thing we can club them together . 
Like we have same useState for setting title, amount and date. We can club them together which are in ExpenseForm.js" file.
So in ExpenseForm.js file we have clubed them in one single state.

Instead of writing same thing again and again we simply use spread operator to copy the previous stored things.

Its personal choice of developer to use "Single state format" or to use "Multiple to one state" format. Because both works similarly.

"Multiple to one state" has some cache that the setUserInput is asynchronous task. If there are a lot of state changes happening. And when the time of execution comes of this setUserInput and suppose at that time if lots of changes has appeared. Then the original stored object gets changed and so the next task performed will be on the old object and not on the new object. But we want the task to be performed on new object formed.

Since "Multiple to one state" is asynchronous task so we will make sure that we will get the latest state whenever a particular state updating function runs.

So for geting latest state after the changes we will ask react to supply it for us. And react will give us the latest state which came after execution of state updating function 1.

To resolve the cache due to "Multile to one state" of getting the latest state use arrow function or anonymous function.