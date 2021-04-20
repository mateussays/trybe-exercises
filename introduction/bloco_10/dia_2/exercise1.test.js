const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('testing callback function', done => {
  uppercase('mateus', (result) => {
    expect(result).toBe('MATEUS');
    done();
  });
})
