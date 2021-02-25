//Resolução de exercicio 7

function conversaoNota(nota) {
  if(nota >= 90 && nota <= 100) {
  return 'Nota A';
  } 
  else if(nota >= 80 && nota < 90) {
    return 'Nota B';
  }
  else if(nota >= 70 && nota < 80) {
    return 'Nota C';
  }
  else if(nota >= 60 && nota < 70) {
    return 'Nota D';
  }
  else if(nota >= 50 && nota < 60) {
    return 'Nota E';
  }
  else if(nota < 50) {
    return 'Nota F';
  }
  else {
    return 'Programa encerrado';
  }
}

console.log(conversaoNota(110));

//Resolvendo exercicio 8

function isEven(num1, num2, num3) {
  if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isEven(30, 50, 23));

//Resolvendo exercicio 9

function isOdd(num1, num2, num3) {
  if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isOdd(23, 12, 11));

//Resolvendo exercicio 10

function calcularLucro(valorCusto, valorVenda) {
  let custoTotal = valorCusto * 1000;
  let impostoTotal = custoTotal * 0.2;
  let vendaTotal = valorVenda * 1000;
  let lucro = vendaTotal - custoTotal - impostoTotal;

  if (valorCusto < 0 || valorVenda < 0) {
    return 'O valor não pode ser menor que zero';
  }
  else {
    return 'O lucro da venda de 1000 itens é ', lucro;
  }
}

console.log(calcularLucro(100, 300));


