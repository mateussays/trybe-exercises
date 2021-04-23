const fetch = require('node-fetch');
const API_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchJoke = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.joke;
};

module.exports = { fetchJoke };