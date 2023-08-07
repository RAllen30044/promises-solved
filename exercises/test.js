/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */


 const handlePromise = () => {
      // Your code goes here...
      return Promise.reject("REJECTED!")
        .catch(console.log)
        .finally(()=>console.log("This promise is finished!"));
    };
    handlePromise()