const idStates = document.getElementById("user-state");
const clearButton = document.querySelector(".clear-button");

function createStates() {
  const states = [
    "Selecione seu estado",
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MG",
    "MS",
    "MT",
    "PA",
    "PB",
    "PE",
    "PI",
    "PR",
    "RJ",
    "RN",
    "RO",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO",
  ];
  let value = 1;
  for (let index = 0; index < states.length; index += 1) {
    const createOptions = document.createElement("option");
    idStates.appendChild(createOptions).innerText = states[index];
    idStates.appendChild(createOptions).value = states[index];
  }
}

function checkEmail() {
  const email = document.querySelector(".email-input");
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = "";
    alert("email inválido");
    return false;
  }
  return emailFormat;
}

function checkEmail() {
  const email = document.querySelector(".email-input");
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat && insertedEmail.length) {
    email.value = "";
    alert("email inválido");
    return false;
  }
  return emailFormat;
}

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll("input");
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === "radio" && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector(".form-data");
    if (checkEmail()) {
      const div = document.createElement("div");
      div.className = "div-curriculum";
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}


function clearFields() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  const div = document.querySelectorAll(".div-curriculum");
  for (
    let index = 0;
    index < formElements.length && index < div.length;
    index += 1
  ) {
    const userInput = formElements[index];
    userInput.value = "";
    textArea.value = "";
    div[index].innerText = "";
  }
}



window.onload = function () {
  createStates();

  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", renderCurriculum);

  clearButton.addEventListener("click", clearFields);
  
  const datePicker = document.getElementById('datepicker');
  datePicker.DatePickerX.init({
    format: 'dd/mm/yyyy'
  });
};
