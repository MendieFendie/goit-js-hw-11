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

export async function responce(input) {
  const answer = await axios.get(
    ` https://pixabay.com/api/?key=${API_KEY}&q=${input}&page=${pageNumber}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
  );
  notification(answer);
  renderCard(answer.data.hits);
  loadBtn.style.visibility = 'visible';
}

export async function loadMoreGet(input) {
  pageNumber += 1;
  console.log(pageNumber);
  if (pageNumber === 13) {
    Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    loadBtn.style.visibility = 'hidden';
  }
  const answer = await axios.get(
    ` https://pixabay.com/api/?key=${API_KEY}&q=${input}&page=${pageNumber}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
  );
  renderCard(answer.data.hits);
}

function renderCard(pictures) {
  let murkup = card(pictures);
  cardsList.insertAdjacentHTML('beforeend', murkup);

  gallery.refresh();
}
