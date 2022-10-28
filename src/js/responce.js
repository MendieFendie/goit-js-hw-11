import axios from 'axios';

import { notification } from './notification';
import card from '../templates/card.hbs';
const API_KEY = '30907588-7c59c046d485207ae743f1a8b';
export const cardsList = document.querySelector('.gallery');
let pageNumber = 1;
const loadBtn = document.querySelector('.load-more');

export function responce(input) {
  axios
    .get(
      ` https://pixabay.com/api/?key=${API_KEY}&q=${input}&page=25&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
    )
    .then(responce => {
      notification(responce);
      renderCard(responce.data.hits);
      loadBtn.style.visibility = 'visible';
    })
    .catch(error => console.log(error));
}

export function loadMoreGet(input) {
  pageNumber += 1;
  console.log(pageNumber);
  axios
    .get(
      ` https://pixabay.com/api/?key=${API_KEY}&q=${input}&page=${pageNumber}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
    )
    .then(responce => {
      renderCard(responce.data.hits);
    })

    .catch(error => console.log(error));
}

function renderCard(pictures) {
  let murkup = card(pictures);
  cardsList.insertAdjacentHTML('beforeend', murkup);
}
