const reverseString = require("./task_2");

test("The reverse of Amazing is gnizamA", () => {
  expect(reverseString("Amazing")).toBe("gnizamA");
});
