let numbers = [1, 8, 7, 9, 3, 6, 2, 0, 4, 5];
let newNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers [index + 1]) {
    newNumbers.push(numbers[index] * numbers[index + 1])
  } else {
    newNumbers.push(numbers[index * 2]);
  }
  
}

console.log(newNumbers);