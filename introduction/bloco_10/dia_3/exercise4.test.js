const getFunctions = require('./exercise4');
jest.mock('./exercise4');

describe('testing aleatory functions', () => {

it('should test the first function', () => {

 getFunctions.toUpperCase.mockImplementation((str) => str.toLowerCase());

  expect(getFunctions.toUpperCase('OI')).toBe('oi');
  expect(getFunctions.toUpperCase).toHaveBeenCalled();
  expect(getFunctions.toUpperCase).toHaveBeenCalledTimes(1);
  expect(getFunctions.toUpperCase).toHaveBeenCalledWith('OI');
});

it('should return the last letter', () => {

  getFunctions.firstLetter.mockImplementation((str) => str.charAt(str.length - 1));

  expect(getFunctions.firstLetter('Brasil')).toBe('l');
  expect(getFunctions.firstLetter).toHaveBeenCalled();
  expect(getFunctions.firstLetter).toHaveBeenCalledTimes(1);
  expect(getFunctions.firstLetter).toHaveBeenCalledWith('Brasil');
})

it('should return three concatenated strings', () => {

  getFunctions.concatenate.mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);

  expect(getFunctions.concatenate('Olá', 'tudo', 'bem')).toBe('Olá tudo bem');
  expect(getFunctions.concatenate).toHaveBeenCalled();
  expect(getFunctions.concatenate).toHaveBeenCalledTimes(1);
  expect(getFunctions.concatenate).toHaveBeenCalledWith('Olá', 'tudo', 'bem');
});

});