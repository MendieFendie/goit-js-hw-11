import Notiflix from 'notiflix';

export function notification(responce) {
  if (responce.data.total === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else {
    Notiflix.Notify.success(`Hooray! We found ${responce.data.total} images.`);
  }
}
