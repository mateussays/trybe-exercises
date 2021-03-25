const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expect = sum(4, 5);
assert.strictEqual(expect, 9);
const expect2 = sum(0, 0);
assert.strictEqual(expect2, 0);
assert.throws(() => { 
  sum(4, '5');
});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);
