For this project we are using single state not multiple state.

e.preventDefault() or event.preventDefault() we use to prevent default behaviour of form because we dont want the page to refresh and make request to some server.

date: new Date(enteredDate), --> This line formats the date in the form we want.

For getting the empty form we will use "value" attribute in each inputs of the form with the value to be entered and now the value will be stored in the object . So after form submission happens we will change the set entered value function to null as the values are stored inside the object.