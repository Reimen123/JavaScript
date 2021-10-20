var operation = prompt("Please enter operation (+,-,*,/,\%): ");
var firstNumber = prompt("Please enter first number: ").replace(",", ".");
var secondNumber = prompt("Please enter second number: ").replace(",", ".");

firstNumber = parseFloat(firstNumber);
secondNumber =  parseFloat(secondNumber);

let result;
let error = "";
let errorTwo = "";
switch (operation) {
    case "+":
        result = firstNumber + secondNumber;
        break;
    case "-":
        result = firstNumber - secondNumber;
        break;
    case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        result = firstNumber / secondNumber;
        break;
    case "%":
        if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
            result = firstNumber % secondNumber;
        }
        else {
            result = undefined;
        }
        break;
    default:
        error = "You have entered unsupurted operator, please contact IT support ";
}
if (result == undefined) {
    errorTwo = "At least one variable is not number";
}
document.getElementById("demo").innerHTML = "Value is " + result + " " + error + errorTwo;
