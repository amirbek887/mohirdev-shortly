const elUrlShortenerForm = document.querySelector('.js-url-shortener__form');
const elUrlShortenerResults = document.querySelector('.url-shortener__reults');

elUrlShortenerForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elUrlShortenerResults.classList.add('url-shortener__reults-open');
});