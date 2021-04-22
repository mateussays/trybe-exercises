const getRandom = require('./exercise-01');


test('testing getRandom', () => {

  getRandom.generateNumber = jest.fn().mockReturnValue(10);

  expect(getRandom.generateNumber()).toBe(10);
  expect(getRandom.generateNumber).toHaveBeenCalled();
  expect(getRandom.generateNumber).toHaveBeenCalledTimes(1);

});