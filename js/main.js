const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener__form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');

if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    elUrlShortenerResults.classList.add('url-shortener__results-open');
  });
}

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function (evt) {
    if (evt.target.matches('.js-copy-short-link-button')) {
      // Changebutton text
      evt.target.textContent = 'Copied';

      //Change button color
      evt.target.classList.add('url-shortener__copy-button--copied');

      //Reser button text and class after 1 second
      setTimeout(function() {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('url-shortener__copy-button--copied');
      }, 1000);
    }
  });
}