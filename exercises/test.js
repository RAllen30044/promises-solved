/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */



const usersUrl = "http://localhost:3000/users/";

const getLoginList = (data) => {
  // Your code goes here...
  
return data.map(element=>element.login)
}
const getData = fetch(usersUrl);

 getData
  .then((res) => res.json())
  .then(data=>getLoginList(data)).then(console.log)


 