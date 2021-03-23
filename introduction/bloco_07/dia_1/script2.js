const factorial = (number) => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
    result *= index
  }
  return result
}

console.log(factorial(5));

const longestWord = phrase => {
  let arrayString = phrase.split(' ');
  let maxWord = 0;
  let big = '';
  for (const word of arrayString) {
    if (word.length > maxWord) {
      maxWord = word.length
      big = word
    }
  }
  return big
}

console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'));