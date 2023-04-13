const Calculator = require('../calculator');

describe('Calculator', () => {
  const calculator = new Calculator();

  test.each([
    [4, 7, 11],
    [0, 8, 8],
    [-5, 8, 3],
    [-7, -5, -12],
    [3, 9, 12, 4],
    [4.5, 6.7, 11.2]
  ])('should add %d to %d equals %d', (number1, number2, result) => {
    expect(calculator.add(number1, number2)).toEqual(result);
  });

  test.each([
    [5, 3, 15],
    [4, 0, 0],
    [-7, 8, -56],
    [-2, -2, 4],
    [3.5, 6, 21],
    [999999999, 999999999, 999999998000000000]
  ])('should multiply %d by %d equal %d', (firstNumber1, secondNumber2, result) => {
    expect(calculator.multiply(firstNumber1, secondNumber2)).toEqual(result);
  });

  test.each([
    [7, 2, 5],
    [4, 4, 0],
    [9, 0, 9],
    [6, -4, 10],
    [-3, -3, 0],
    [0, -5, 5],
    [3.4, 6.3, -2.9]
  ])('should %d subtract %d equal %d', (reduced, subtrahend, result) => {
    expect(calculator.subtraction(reduced, subtrahend)).toEqual(result);
  });

  test.each([
    [15, 3, 5],
    [-20, 5, -4],
    [27, -3, -9],
    [-36, -4, 9],
    [0, 7, 0],
    [8, 0, Infinity]
  ])('should divide %d by %d to equal %d', (dividend, divider, result) => {
    expect(calculator.divide(dividend, divider)).toEqual(result);
  });

  test.each([
    [5, 25],
    [1, 1],
    [10, 100],
    [-8, 64],
    [0, 0],
  ])('should square %d equal %d', (number, result) => {
    expect(calculator.exponentiation(number)).toEqual(result);
  });
});
