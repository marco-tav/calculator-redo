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

}));

operatorButtons.forEach(opButton => opButton.addEventListener("click", (e) => {

}));

equalButton.addEventListener("click", () => {

});

clearButton.addEventListener("click", () => {
  clearCalc(display, operation);
});