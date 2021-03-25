const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (lesson, objectKey, value) => {
  lesson[objectKey] = value;
}
addTurno(lesson2, 'turno', 'manhã');

const listKeys = (lesson) =>  Object.keys(lesson);

const sizeObject = (obj) => Object.keys(obj).length;