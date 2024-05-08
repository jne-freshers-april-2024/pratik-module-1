var btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    console.log("Hey! I am inside callback fuction ")
})

function callme(){
 console.log("I am the normal fuction here");
}
callme();