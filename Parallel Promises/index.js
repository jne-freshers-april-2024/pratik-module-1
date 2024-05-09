var promise = Promise.all([new Promise((resolve)=>setTimeout(()=>{console.log("I am one "),resolve(5)},5000)),new Promise((resolve,reject)=>setTimeout(()=>reject("haha i will not resolve"),3000)),new Promise((resolve)=>setTimeout(()=>console.log("I am three "),2000))])

promise.then(()=>{
    console.log("hehe i am resolved")
}).catch(()=>{
    console.log("shit! it is not resolving here")
})
console.log(promise)

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
  
//   // map every url to the promise of the fetch
//   let requests = urls.map(url => fetch(url));
  
//   // Promise.all waits until all jobs are resolved
//   Promise.all(requests)
//     .then(responses => responses.forEach((res)=>{
//         console.log(res)
//     }));