const calculator = (num1, num2, operator) => {
  let result;
  // if (operator === '+') {
  //     result = num1 + num2;
  // } else if (operator === '-') {
  //     result = num1 - num2;
  // } else if (operator === '*') {
  //     result = num1 * num2;
  // } else if (operator === '/') {
  //     result = num1 / num2;
  // } else {
  //     throw new Error('Invalid operator');
  // };
  // return result

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error("Invalid operator");
  }
};

export default calculator;
