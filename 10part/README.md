"Conditional Rendering" is basically achieving something if certain condition gets fullfiled.
Like here we want that if nothing present in list show some message.

Here we cannot use if condition so in {} this we are writting the conditions directly.

Way-1 --> {condition ? (what to implement to be written in tag) : (otherwise what to be rendered) } ----> condition and what to implement if its true and else what to render if false. This was ternary operator use.

Way-2 --> By using and operator also we can do this checking ---> {condition && things to be rendered if condition is true}

Way-3 --> By using if loop and variable outside the return. And outside return we can use normal js.

Basically we will use Way-3 as it keeps the jsx clean and easy to understand and we have seperate logic above

