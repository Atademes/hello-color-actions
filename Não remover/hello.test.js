const hello = require('./hello');

test('returns correct greeting', () => {
  expect(hello()).toBe("Hello World from Sao Paulo");
});
