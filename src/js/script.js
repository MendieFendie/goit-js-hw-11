import { responce } from './responce';
import { loadMoreGet } from './responce';
import { cardsList } from './responce';

const refs = {
  searchForm: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  button: document.querySelector('.button'),
  loadMoreBtn: document.querySelector('.load-more'),
};

refs.input.addEventListener('input', searchValue);
refs.button.addEventListener('click', sendValue);
refs.loadMoreBtn.addEventListener('click', loadMore);

refs.loadMoreBtn.style.visibility = 'hidden';
function searchValue(e) {
  searchWord = e.currentTarget.value.trim();
}

function sendValue(event) {
  event.preventDefault();
  console.log(searchWord);
  cardsList.innerHTML = '';
  responce(searchWord);
}

function loadMore(e) {
  e.preventDefault();
  loadMoreGet(searchWord);
}
