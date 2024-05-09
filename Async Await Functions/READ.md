Async function always returns promise(if you are returning the promise then it will return the promise but if you are returing other than promise then it will wrap that value inside the function and return the promise object)***

Async and await combo is used to handle promises 
before async and await we could handle the promises through promise.then() but now we will handle by putting await keyword before promise
var data = await new Promise((resolve)=>resolve(34)); Due to this keyword this promise will resolve in the data variable
Await can only be  


IMP: fetch() and json() returns promsie
