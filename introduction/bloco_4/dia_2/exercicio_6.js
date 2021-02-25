let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let isEven = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0 ) {
    isEven += 1; //caso encontre um número ímpar some mais 1
  }
}

if (isEven === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(isEven)
}




