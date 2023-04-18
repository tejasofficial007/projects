
let counter = 0;

let increamentbtn = document.getElementById("increment-btn");

let decreamentbtn = document.getElementById("decrement-btn");


let reset = document.getElementById("reset");

let counterValue = document.getElementById("counter-value");



increamentbtn.addEventListener("click",()=>{
    counter --;
    counterValue.innerHTML = counter
});

decreamentbtn.addEventListener("click", ()=>{
    counter ++;
    counterValue.innerHTML = counter
});

reset.addEventListener("click",()=>{
    counter = 0;
    counterValue.innerHTML = counter
});