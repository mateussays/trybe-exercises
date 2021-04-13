// apiScript.js
const showJoke = ({joke}) => {
  let div = document.querySelector('div');
  let createText = document.createElement('p');

  createText.innerHTML = `${joke}`;

  div.appendChild(createText);
}

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    showJoke(data);
  });
};

window.onload = () => fetchJoke();