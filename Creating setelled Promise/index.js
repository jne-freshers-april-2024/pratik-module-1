var promise = doAddition(10,23);

function doAddition(num,num2){
    return new Promise((resolve,reject)=>{
        if(num && num2){
            let ans = num+num2;
            setTimeout(()=>{
                reject("hahaha rejected your request");
            },5000)

        }
    })
}

promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("here is an error");
}).then(()=>{
    return new Promise((resolve,reject)=>{
        resolve(30);
    })
}).then((data)=>{
    console.log("we got the data here ")
    return data; // we have returned the data so that it could passed down the chanin ,without returning the data it will not pass down the chain
}).then((data)=>{
    console.log("here is the data "+ data); // we got the data here
})



