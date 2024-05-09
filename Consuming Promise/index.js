let api = "https://api.github.com/users";

var promise = fetch(api);
promise.then(()=>{
console.log("Promise is resolved successfully");
return new Promise((resolve,reject)=>{
    resolve(34);
})
}).then((data)=>{console.log(data);
    return new Promise((resolve,reject)=>{
        reject("we can not process this promise now")
    })
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Promise is rejected here")
})

//Above code will eliminate the problem of callback funciton having problem of callback hell and inverison of control(Programmer does not have control over the code anymore)