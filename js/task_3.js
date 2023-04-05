class Calculator {
  constructor() {}

  add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }

  substract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
  };

  multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
  };

  divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
  };
}

module.exports = Calculator;
