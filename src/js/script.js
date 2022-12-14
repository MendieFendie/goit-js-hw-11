import { responce, loadMoreGet, cardsList } from './responce';

const refs = {
  searchForm: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  button: document.querySelector('.button'),
  loadMoreBtn: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
};

refs.input.addEventListener('input', searchValue);
refs.button.addEventListener('click', sendValue);
refs.loadMoreBtn.addEventListener('click', loadMore);
refs.gallery.addEventListener('click', openModal);
let searchWord = '';

refs.loadMoreBtn.style.visibility = 'hidden';
function searchValue(e) {
  searchWord = e.currentTarget.value.trim();
}

function sendValue(event) {
  event.preventDefault();
  cardsList.innerHTML = '';
  responce(searchWord);
}

function loadMore(e) {
  e.preventDefault();
  loadMoreGet(searchWord);
}

function openModal(event) {
  event.preventDefault();
}
