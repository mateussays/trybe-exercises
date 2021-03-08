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

function createBtnHolidays(btnName) {
  let btnContainer = document.querySelector('.buttons-container');
  let createBtn = document.createElement('button');
  let idBtn = 'btn-holiday';

  createBtn.innerHTML = btnName;
  createBtn.id = idBtn;
  btnContainer.appendChild(createBtn);
};

createBtnHolidays('Feriados');

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

