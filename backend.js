console.log("hello people");
console.log("hello people");
const [num1, operator, num2] = process.argv.slice(2);
console.log(process.argv);
switch (operator) {
  case "+":
    const result = parseInt(num1) + parseInt(num2);
    console.log("result", result);
    break;
}
