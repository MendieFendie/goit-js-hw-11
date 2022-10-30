import axios from 'axios';
import Notiflix from 'notiflix';
import { notification } from './notification';
import card from '../templates/card.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '30907588-7c59c046d485207ae743f1a8b';
export const cardsList = document.querySelector('.gallery');
let pageNumber = 1;
const loadBtn = document.querySelector('.load-more');
const gallery = new SimpleLightbox('.gallery a');

export function responce(input) {
  axios
    .get(
      ` https://pixabay.com/api/?key=${API_KEY}&q=${input}&page=${pageNumber}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`,
      { 'content-type': aplication / json }
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
  if (pageNumber === 13) {
    Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    loadBtn.style.visibility = 'hidden';
  }
  axios
    .get(
      ` https://pixabay.com/api/?key=${API_KEY}&q=${input}&page=${pageNumber}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
    )
    .then(responce => {
      console.log(responce.data);
      renderCard(responce.data.hits);
    })

    .catch(error => console.log(error));
}

function renderCard(pictures) {
  let murkup = card(pictures);
  cardsList.insertAdjacentHTML('beforeend', murkup);

  gallery.refresh();
}
