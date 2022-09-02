// Change Calculator Mode
let span = document.querySelector(".container span");
let container = document.querySelector(".container");

span.onclick = () => {
    span.classList.toggle("fa-sun");
    span.classList.toggle("fa-moon");
    container.classList.toggle("active")
};

// Start Calculator Logic
let previousOperand = document.querySelector(".results .previous-operand ");
let currentOperand = document.querySelector(".results .current-operand ");
let buttons = document.querySelectorAll(".body #btn");
let equal = document.querySelector(".body .equal");
let clear = document.querySelector(".body .clear");
let clearOne = document.querySelector(".body .erase");
let operand = document.querySelectorAll(".body .operand");

// Loop On All Button Except Clear, Erase, Equal
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let currOperation = e.target.innerHTML;
        previousOperand.value += currOperation;
        equal.style.pointerEvents = "auto";
        
        // Make calculation automatic
        try {
            if (currOperation == "/" ||
                currOperation == "*" ||
                currOperation == "-" ||
                currOperation == "+" ||
                currOperation == ".") {
            } else {
                let answer = eval(previousOperand.value);
                currentOperand.value = answer;
            }
        } catch(err) {
            currentOperand.value = "Error";
            equal.style.pointerEvents = "none";
        }
    });
});

// Calculate The Value Given When click equal
equal.addEventListener("click", () => {
    let inputVal = previousOperand.value;
    try {
        let answer = eval(inputVal);
        if (Number.isInteger(answer)) {
            currentOperand.value = answer;
        }
    } catch (err) {
        currentOperand.value = "Error";
    }
    previousOperand.value = "";
});

//  Clear all input when clicking Ac
clear.onclick = () => {
    currentOperand.value = "";
    previousOperand.value = "";
};

//  erase one number at time 
clearOne.onclick = () => {
    if (previousOperand.value != "") {
        previousOperand.value = previousOperand.value.substr(0, previousOperand.value.length - 1);
    } else {
        currentOperand.value = currentOperand.value.substr(0, currentOperand.value.length - 1);
    }
};