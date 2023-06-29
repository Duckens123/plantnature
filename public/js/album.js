const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get("page");
const cardText = document.querySelector('.card-text');
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  if (page === null || page === undefined || isNaN(page)) page = 1;
  fetch(`http://127.0.0.1:3000/plants?page=2`)
    .then(res => res.json())
    .then(data => {
      data.map((item, i) => {
        console.log(item.id,i)
        cardText[i].innerHTML=item.id;
      });
    });
});