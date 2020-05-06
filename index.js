function fetchBooks() {
  /*
  fetch request sent to the url
  then the response is turned into json using json();
  then that rendered json is stored as the variable json
  and passed into renderBooks();

  All is returned to actually put it on the page...?
  */
  return fetch('https://anapioficeandfire.com/api/books').then(response => response.json()).then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
