const getRandom = require('./exercise-01');
jest.mock('./exercise-01');

it('should receive three parameters and multiply them', () => {

  getRandom.generateNumber.mockImplementation((a, b, c) => (a * b) * c);

  expect(getRandom.generateNumber(20, 2, 2)).toBe(80);
  expect(getRandom.generateNumber).toHaveBeenCalled();
  expect(getRandom.generateNumber).toHaveBeenCalledTimes(1);
  expect(getRandom.generateNumber).toHaveBeenCalledWith(20, 2, 2);

  getRandom.generateNumber.mockRestore();

  getRandom.generateNumber.mockImplementation((a) => a * 2);

  expect(getRandom.generateNumber(5)).toBe(10);
  expect(getRandom.generateNumber).toHaveBeenCalled();
  expect(getRandom.generateNumber).toHaveBeenCalledTimes(1);
  expect(getRandom.generateNumber).toHaveBeenCalledWith(5);

})