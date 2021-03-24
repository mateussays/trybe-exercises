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

let count = 0;
const input = document.querySelector('#input');
const button = document.querySelector('#button');
button.addEventListener('click', ()=> input.value = count += 1);

const changeX = string => {
  let phrase = 'Tryber x aqui!';
  let result = phrase.replace('x', string);
}

changeX('Mateus');

const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

