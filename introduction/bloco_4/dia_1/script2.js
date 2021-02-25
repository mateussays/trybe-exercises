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

