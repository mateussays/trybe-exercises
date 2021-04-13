const generateArray = () => {
  const random = [...Array(10)]
  .map(() => Math.floor(Math.random() * 50) ** 2)
  .reduce((acc, item) => acc + item, 0)
  return random;
}


const promise = new Promise((resolve, reject) => {
  const number = generateArray();
  if (number < 8000) {
    return resolve(number);
  }
  reject(number);
})
.then(number => `Que sucesso, nosso número é ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso, nosso número foi o ${number}`));