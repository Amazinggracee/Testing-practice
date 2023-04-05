const Calculator = require("./task_3");

describe("UnitTests", () => {
  const calc = new Calculator();
  test("add 1+1 equal 2", () => {
    expect(calc.add(1, 1)).toBe(2);
  });

  test("substract 2-1 equal 1", () => {
    expect(calc.substract(2, 1)).toBe(1);
  });

  test("multiple 2*2 equal 4", () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });

  test("divide 4/2 equal 2", () => {
    expect(calc.divide(4, 2)).toBe(2);
  });
});
