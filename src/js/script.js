import card from '../templates/card.hbs';
import { responce } from './responce';

const refs = {
  searchForm: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  button: document.querySelector('.button'),
};

let searchWord = null;

refs.input.addEventListener('input', searchValue);
refs.button.addEventListener('click', sendValue);

function searchValue(e) {
  searchWord = e.currentTarget.value.trim();
}

function sendValue(event) {
  event.preventDefault();
  console.log(searchWord);
  responce(searchWord);
}
