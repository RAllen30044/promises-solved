/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

 const getPromise = (arg) => {
      const myPromise = new Promise((res, rej)=>{
        res(arg)
        
      })
      // Your code goes here...
    return Number.isInteger(arg)? myPromise: 0;
     
    };
 const updateSumValue = () => {
      // Your code goes here...
      let sum = 2;
     getPromise(120).then((data) => console.log(data)) 
     return sum +8;
    };
    console.log(updateSumValue());