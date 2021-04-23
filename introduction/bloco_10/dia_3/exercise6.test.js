const getAPI = require('./exercise6');

describe('testing API request', () => {

  const apiURL = jest.spyOn(getAPI, "fetchJoke");
  afterEach(apiURL.mockReset);

  it('API function resolves', async () => {
    apiURL.mockResolvedValue('request success');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request success');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  it('API function rejected', async () => {
    apiURL.mockRejectedValue('request failed');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('request failed');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });

})


