const capitalize = require("./task_4");

test("weLCome becomes Welcome", () => {
  expect(capitalize("weLCome")).toBe("Welcome");
});
