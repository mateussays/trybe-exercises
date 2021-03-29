const generatorNumber = () => { 
  return Math.floor(Math.random() * 5 + 1);
}

const sortedNumber = (number) => {
  if (number === generatorNumber()) {
    return 'Parabens você ganhou';
  } else {
    return 'Tente novamente';
  }
}

console.log(sortedNumber(1));