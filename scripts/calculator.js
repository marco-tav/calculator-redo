/*------------------- Function Declarations --------------------*/ 
function add(num1, num2) {
  return +num1 + +num2;
}

function subtract(num1, num2) {
  return +num1 - +num2;
}

function multiply(num1, num2) {
  return +num1 * +num2;
}

function divide(num1, num2) {
  return num2 === 0 ? "The calculator exploded" : +num1 / +num2;
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

}));

operatorButtons.forEach(opButton => opButton.addEventListener("click", (e) => {

}));

equalButton.addEventListener("click", (e) => {

});

clearButton.addEventListener("click", () => {
  clearCalc(display, operation);
});