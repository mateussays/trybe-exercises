const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAns, studentAns, action) => {
  let count = 0;
  for (let index = 0; index < rightAns.length; index += 1) {
    const actionReturn = action(rightAns[index], studentAns[index]);
    count += actionReturn;
  }
  return `Resultado final: ${count} corretas`;
}

console.log(repeat(rightAnswers, studentAnswers, (rAnswer, uAnswer) => {
  if(rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));