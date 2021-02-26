let numbers = [1, 8, 7, 9, 3, 6, 2, 0, 4, 5];

for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
   if (numbers[index] < numbers[index2]) {
     let position = numbers[index];

     numbers[index] = numbers[index2];
     numbers[index2] = position;
   }
    
  }
  
}

console.log(numbers);