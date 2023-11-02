/*------------------- Function Declarations --------------------*/ 
function add(num1, num2) {
  return Math.round((+num1 + +num2)*100)/100;
}

function subtract(num1, num2) {
  return Math.round((+num1 - +num2)*100)/100;
}

function multiply(num1, num2) {
  return Math.round((+num1 * +num2)*100)/100;
}

function divide(num1, num2) {
  return num2 === "0" ? "The calculator exploded" : Math.round((+num1 / +num2)*100)/100;
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

function displayButtonContent(buttonContent, display, operation) {
  display.innerText += buttonContent;
  operation.displayValue += buttonContent;
}

function clearCalc(display, operation) {
  display.innerText = "";
  operation.displayValue = "";
  operation.aux = "";
  operation.firstOperand = "";
  operation.secondOperand = "";
  operation.operator = "";
  operation.result = "";
}


/*---------------------- Main Program --------------------------*/

const operation = {
  displayValue: "",
  aux: "",
  firstOperand: "",
  secondOperand: "",
  operator: "",
  result: "",
};

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("ac");
const display = document.getElementById("display");



numberButtons.forEach(button => button.addEventListener("click", (e) => {
  displayButtonContent(e.target.innerText, display, operation);
  operation.aux += e.target.innerText;
}));

operatorButtons.forEach(opButton => opButton.addEventListener("click", (e) => {
  operation.firstOperand = operation.aux;
  if(!(operation.displayValue.includes("+") || operation.displayValue.includes("-") || operation.displayValue.includes("x") || operation.displayValue.includes("/"))) {
    displayButtonContent(e.target.innerText, display, operation);
    operation.aux = "";
    operation.operator = e.target.innerText;
  }
}));

equalButton.addEventListener("click", () => {
  operation.secondOperand = operation.aux;
  if(operation.firstOperand && operation.secondOperand && operation.operator) {
    operation.result = operate(operation.firstOperand, operation.secondOperand, operation.operator).toString();
    display.innerText = operation.result;
    operation.displayValue = operation.result;
  }
});

clearButton.addEventListener("click", () => {
  clearCalc(display, operation);
});