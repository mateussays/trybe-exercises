const getRandom = require('./exercise-01');
jest.mock('./exercise-01');

test('function should have two parameters  and return the division of the first number for the second number', () => {
  getRandom.generateNumber.mockImplementation((a, b) => a / b);

  expect(getRandom.generateNumber(10, 2)).toBe(5);
  expect(getRandom.generateNumber).toHaveBeenCalled();
  expect(getRandom.generateNumber).toHaveBeenCalledTimes(1);
  expect(getRandom.generateNumber).toHaveBeenCalledWith(10, 2);
});
