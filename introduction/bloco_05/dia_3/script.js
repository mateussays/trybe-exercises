function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

//Exercicio 1

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dezDays = dezDaysList[index];
    const dezDaysItem = document.createElement('li');
    
    if (dezDays === 24 || dezDays === 31) {
      dezDaysItem.className = 'day holiday';
      dezDaysItem.innerHTML = dezDays;
      monthDaysList.appendChild(dezDaysItem);
    } else if (dezDays === 4 || dezDays === 11 || dezDays === 18) {
      dezDaysItem.className = 'day friday';
      dezDaysItem.innerHTML = dezDays;
      monthDaysList.appendChild(dezDaysItem);
    } else if (dezDays === 25) {
      dezDaysItem.className = 'day holiday friday';
      dezDaysItem.innerHTML = dezDays;
      monthDaysList.appendChild(dezDaysItem);
    } else {
      dezDaysItem.className = 'day';
      dezDaysItem.innerHTML = dezDays;
      monthDaysList.appendChild(dezDaysItem);
    };
  };
};

createDays();

//Exercicio 2

function createBtnHolidays(btnName) {
  let btnContainer = document.querySelector('.buttons-container');
  let createBtn = document.createElement('button');
  let idBtn = 'btn-holiday';

  createBtn.innerHTML = btnName;
  createBtn.id = idBtn;
  btnContainer.appendChild(createBtn);
};

createBtnHolidays('Feriados');

//Exercicio 3

const btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', function() {
  const holidays = document.querySelectorAll('.holiday');

  for (index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'white') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[index].style.backgroundColor = 'white';
    }
  }
});

//Exercicio 4

function createFriday(friday) {
  const fridayContainer = document.querySelector('.buttons-container');
  const createFridayButton = document.createElement('button');
  const createFridayId = 'btn-friday';

  createFridayButton.innerHTML = friday;
  createFridayButton.id = createFridayId;
  fridayContainer.appendChild(createFridayButton);
}

createFriday('Sexta-Feira');

//Exercicio 5

function createTextFriday(fridayArray) {
const btnFriday = document.querySelector('#btn-friday');
const friday = document.getElementsByClassName('friday');
const fridayText = 'Sexta-feira!';

btnFriday.addEventListener('click', function() {

  for (let index = 0; index < friday.length; index += 1) {
    if(friday[index].innerHTML !== fridayText) {
      friday[index].innerHTML = fridayText;
    } else {
      friday[index].innerHTML = fridayArray[index];
    }
  }
});
};

let fridayDez = [ 4, 11, 18, 25 ];
createTextFriday(fridayDez);

//Exercicio 6 copiado do gabarito

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

//Exercicio 7 

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

//Exercicio 8 

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

//Exercicio 9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

//Exercicio 10

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

//Exercicio Bonus

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();

