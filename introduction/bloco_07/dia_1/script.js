const testingScope = escopo => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (array) => {
  const sortArray = array.sort((a, b) => a - b);
  return sortArray;
}
const sorted = sortOddsAndEvens(oddsAndEvens);
console.log(`Os números ${sorted} se encontram ordenados de forma crescente!`);