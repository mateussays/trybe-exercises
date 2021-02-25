//Resolvendo exercicio 11

function calcSalarioLiquido(salarioBruto) {
  let salarioLiquido = null;
  let salarioBase = null;

  let inss8 = salarioBruto * 0.08;
  let inss9 = salarioBruto * 0.09;
  let inss11 = salarioBruto * 0.11;
  const inssMax = 570.88;

  let aliquota7 = (salarioBase * 0.075) - 142.8;
  let aliquota15 = (salarioBase * 0.15) - 354.8;
  let aliquota22 = (salarioBase * 0.225) - 636.13;
  let aliquota27 = (salarioBase * 0.275) - 869.36;

  if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - inss8;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - inss9;
  } else if (salarioBruto >= 2594.93 && 5189.82) {
    salarioBase = salarioBruto - inss11;
  } else {
    salarioBase = salarioBruto - inssMax;
  }

  if (salarioBase <= 1906.98) {
    salarioLiquido = salarioBase;
  } else if (salarioBase >= 1906.99 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - aliquota7;
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - aliquota15;
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - aliquota22;
  } else {
    salarioLiquido = salarioBase - aliquota27;
  }

  return 'O salario final é ' + salarioLiquido;
};

console.log(calcSalarioLiquido(1000));