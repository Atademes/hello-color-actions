const hello = require('./hello');

test('returns correct greeting', () => {
  expect(hello()).toBe("Hello, I'm from Sao Paulo");
});
