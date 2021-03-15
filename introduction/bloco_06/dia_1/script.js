const idStates = document.getElementById('user-state');
function createStates() {
  const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  let value = 1;
  for (let index = 0; index < states.length; index += 1) {
    const createOptions = document.createElement('option');
    idStates.appendChild(createOptions).innerText = states[index];
    idStates.appendChild(createOptions).value = states[index];
  }
}


window.onload = function () {
  createStates();
}