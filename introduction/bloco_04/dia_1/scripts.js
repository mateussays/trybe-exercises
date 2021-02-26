//Resolvendo exercício 1
operacoes(70 , 70)

function operacoes (a, b) {
  let soma = a + b;
  console.log('Soma = ' + soma);

  let subtracao  = a - b;
  console.log('Subtração = ' + subtracao);

  let multiplicacao = a * b;
  console.log('Multiplicação = ' + multiplicacao);

  let divisao = a / b;
  console.log('Divisao = ' + divisao);

  let modulo = a % b;
  console.log('Modulo = ' + modulo);

  return true;
}

//Resolvendo exercício 2

function maiorQue(number1 , number2) {
  if (number1 > number2) {
    return number1;
  } 
  else {
    return number2;
  }
};

console.log(maiorQue(30, 70));

//Resolvendo exercicio 3

function maiorQueTres(number1 , number2, number3) {
  if (number1 > number2 && number1 > number3) {
    return number1;
  }
  else if (number2 > number1 && number2 > number3){
    return number2;
  }
  else {
    return number3;
  }
}

console.log(maiorQueTres(50, 60, 80));

//Resolvendo exercicio 4 

function isPositive(number) {
  if (number > 0) {
    return 'positive';
  }
  else if (number < 0) {
    return 'negative';
  }
  else {
    return 'zero';
  }
}
console.log(isPositive(60));

//Resolvendo exercicio 5

function somaTriangulo(num1, num2, num3) {
  let soma = num1 + num2 + num3;

  if (soma >= 180 ) {
    return true;
  }
  else {
    return false;
  }
}

console.log(somaTriangulo(80, 70, 25));

//Resolvendo exercicio 6 

function movimentoXadrez(peca) {
    peca = peca.toLocaleLowerCase()

    switch (peca) {
        case "rei":
            return "O rei pode se movimentar em qualquer direção uma casa por vez";
            break
        case "rainha":
            return "A rainha pode se movimentar em qualquer direção para quantas casas quiser, contanto que estas estejam vazias";
            break
        case "torre":
            return "O torre pode se movimentar em linha reta, na horizontal e na vertical, para quantas casas quiser, contanto que estas estejam vazias";
            break
        case "bispo":
            return "O bispo pode se movimentar na diagonal para quantas casas quiser, contanto que estas estejam vazias";
            break
        case "cavalo":
            return "O cavalo pode se movimentar duas casa na vertinal e uma casa na horizontal, ou duas casas na horizontal e uma na vertical, podendo pular qualquer peça caso necessário";
            break
        case "peão":
            return "O peão pode se movimentar apenas um casa para a frente";
            break
        default:
            return "Erro: entrada incorreta";
    }
}

console.log(movimentoXadrez("Cavalo"));

//Resolvendo exercicio 7

