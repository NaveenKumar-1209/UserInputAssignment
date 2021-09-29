
1. Reactjs is a javascript library and javascript is a synchronous, single-threaded language. While calling an API, it makes sure that the further code is executed 
when API is loaded on the server. That's why I have used here "Async await" to make asynchronous. We can also use promises to make asynchronous. 

3. The function "fetchusers" is wrapped in "try...catch statement", if the data is not fetched successfully, it would throw an error using catch statement. 

2. After that I checked whether the response is okay. In case, it is not okay, then I would throw an error.

3. Since the API is a JSON file, the response is parsed using JSON function as it is a JSON file.

4. Since the variable declared inside a function can't be access outside the function as const keyword is a function scoped. So that, a "user" state is defined using useState
Hooks. And, the response from the API is stored in users state.

5. For showing the user data on clicking the button "Get Users", I defined an "isShow" state using useState hooks and set initial values as false. I wrote a "showUserHandler" for 
clicking on the button, when it is clicked. The value of "isShow" gets false, I wrote a JSX code for false value as "To show the user data, Click on the above button".
When the value of "isShow" gets true, the users details will be shown in the cards.

6. For clean code, I made seperate component named "userInput", in which I got every users' details using map function. The response data from parent component is passed 
through "props".

That's all. 


Thanks.........