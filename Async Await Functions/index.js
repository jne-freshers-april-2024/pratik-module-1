let promise = new Promise((resolve,resject)=>{
    setTimeout(()=>{
        resolve("I am resolved");
    },5000);
})

async function practice(){
    console.log("I am first");
    let p = await promise;
    console.log(p);
    let p1 = await promise;
    console.log(p1);
}

practice();
console.log("I am not in you")

