let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++){
  let media = (soma += numbers[i]) / numbers.length;
  console.log(media);
};

