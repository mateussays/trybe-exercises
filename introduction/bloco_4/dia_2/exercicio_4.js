let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

for (let i = 0; i < numbers.length; i++){
   soma += numbers[i]
};

media = soma / numbers.length;

if (media > 20) {
  console.log('É maior que 20');
} else {
  console.log('É menor que 20')
};

