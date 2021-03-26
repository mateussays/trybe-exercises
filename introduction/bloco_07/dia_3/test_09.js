const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (words, item) => {
  result = -1;
  for (index = 0; index < words.length; index += 1) {
    if (item === words[index]) {
      result = index;
    }
  }
  return result;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);