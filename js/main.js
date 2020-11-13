// App State 
let total;

// Cached Elements

//input, +btn, -btn, display total
const inputFld = document.getElementById('inputField');
const minusBtn = document.getElementById('-');
const plusBtn = document.getElementById('+');
const displayTotal = document.getElementById('totalText');


// Event Listeners
plusBtn.addEventListener('click', handlePlusClick);
minusBtn.addEventListener('click', handleMinusClick);



// Functions
function init() {
    console.log("init function called");
    total = 0;
    inputFld.value = 1;
    console.log(`inputFld.value: ${inputFld.value}`);
    render();
}

function render() {
    console.log("render function called");
    displayTotal.innerText = total;
    if (total >= 0) {displayTotal.style.color = `black`;};
    if (total < 0) {displayTotal.style.color = 'red'};
}

function handlePlusClick() {
    console.log("handlePlusClick function called");
    let num = parseInt(inputFld.value);
    total += (num);
  
    console.log(`added ${num}... so new total is ${total}`);
 
    render();
}

function handleMinusClick() {
    console.log("handleMinusClick function called");
    let num = parseInt(inputFld.value);
    total -= (num);
    
    console.log(`subtracted ${num}... so new total is ${total}`);
   
    render();
}

init();