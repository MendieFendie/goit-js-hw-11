import card from '../templates/card.hbs';
const cardsList = document.querySelector('.gallery');
export function responce(input) {
  return fetch(
    ` https://pixabay.com/api/?key=30907588-7c59c046d485207ae743f1a8b&q=${input}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
  )
    .then(responce => {
      console.log(responce);
      return responce.json();
    })
    .then(pictures => {
      console.dir(pictures);
      renderCard(pictures.hits);
    })
    .catch(error => console.log(error));
}

function renderCard(pictures) {
  let murkup = card(pictures);
  cardsList.innerHTML = murkup;
}
