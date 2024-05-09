let count = document.getElementById("num");
let num = count.innerHTML

function increament(){
    num++;
    count.innerHTML = num;
}
function decreament(){
    num--
    count.innerHTML = num;
}
function setZero(){
    num=0;
    count.innerHTML = num;
}