const hello = require("./hello");

test("returns correct greeting from Sao Paulo", () => {
  expect(hello.helloFromSaoPaulo()).toBe("Hello, I'm from Sao Paulo");
});

test("returns correct greeting from Office Hours", () => {
  expect(hello.helloFromOfficeHours()).toBe("Hello World from the Office Hours in the terminal!");
});
