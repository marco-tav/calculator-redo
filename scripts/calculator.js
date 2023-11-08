/*------------------- Function Declarations --------------------*/ 
function add(num1, num2) {
  return (Math.round((+num1 + +num2)*100)/100).toString();
}

function subtract(num1, num2) {
  return (Math.round((+num1 - +num2)*100)/100).toString();
}

function multiply(num1, num2) {
  return (Math.round((+num1 * +num2)*100)/100).toString();
}

function divide(num1, num2) {
  return num2 === "0" ? "The calculator exploded" : (Math.round((+num1 / +num2)*100)/100).toString();
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

function resetDisplay(display) {
  display.innerText = "";
}

function displayData(data, display) {
  display.innerText += data;
}

function clearCalc(display, operation) {
  display.innerText = "";
  operation.firstOperand = "";
  operation.secondOperand = "";
  operation.operator = "";
}


/*---------------------- Main Program --------------------------*/

const operation = {
  firstOperand: "",
  secondOperand: "",
  operator: "",
};

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("ac");
const display = document.getElementById("display");



numberButtons.forEach(button => button.addEventListener("click", (e) => {
  if (operation.operator === "") {
    displayData(e.target.innerText, display);
    operation.firstOperand += e.target.innerText;
  } else if (operation.operator !== "") {
    displayData(e.target.innerText, display);
    operation.secondOperand += e.target.innerText;
  }
}));

operatorButtons.forEach(opButton => opButton.addEventListener("click", (e) => {
  let operationIsDefined = operation.firstOperand !== "" && operation.secondOperand !== "" && operation.operator !== "";

  if(operationIsDefined) {
    let result = operate(operation.firstOperand, operation.secondOperand, operation.operator);
    resetDisplay(display);
    displayData(result, display);
    displayData(e.target.innerText, display);
    operation.firstOperand = result;
    operation.secondOperand = "";
    operation.operator = e.target.innerText;
  } else if(operation.firstOperand && !operation.operator) {
    displayData(e.target.innerText, display);
    operation.operator = e.target.innerText;
  }
}));

equalButton.addEventListener("click", () => {
  let operationIsDefined = operation.firstOperand !== "" && operation.secondOperand !== "" && operation.operator !== "";
  
  if (operationIsDefined) {
    let result = operate(operation.firstOperand, operation.secondOperand, operation.operator);
    resetDisplay(display);
    displayData(result, display);
    operation.firstOperand = result;
    operation.secondOperand = "";
    operation.operator = "";
  }
});

clearButton.addEventListener("click", () => {
  clearCalc(display, operation);
});