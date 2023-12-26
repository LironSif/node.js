console.log("hi from calc");
console.log("process.argv", process.argv);
const [num1, operator, num2] = process.argv.slice(2);
console.log("num1", num1);
console.log("operator", operator);
console.log("num2", num2);

let result;

switch (operator) {
  case "+":
    result = parseFloat(num1) + parseFloat(num2);
    console.log("result", result);
    break;
  case "-":
    result = parseFloat(num1) - parseFloat(num2);
    console.log("result", result);
    break;
  case "*":
    result = parseFloat(num1) * parseFloat(num2);
    console.log("result", result);
    break;
  case "/":
    result = parseFloat(num1) / parseFloat(num2);
    console.log("result", result);
    break;

  default:
    console.log("Invalid operator");
    break;
}
