const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let page = urlParams.get("page");
const div = document.querySelector('.banner-div');






document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  if (page === null || page === undefined || isNaN(page)) {
    page = 1;
  }
  alert(page);
  fetch(`http://127.0.0.1:3000/plants?page=${page}`)
    .then(res => res.json())
    .then(data => {
      console.log(data[0]);
      data.map((item, i) => {
        const divCol = document.createElement('div');
        divCol.classList.add('col');
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('width', '100%');
        img.setAttribute('height', '255');
        img.src=item.image_url;
        const divCard = document.createElement('div');
        divCard.classList.add('card', 'shadow-sm')
        divCol.appendChild(divCard);
        divCard.appendChild(img);
        div.appendChild(divCol);
        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body')
        const cardText = document.createElement('p');
        cardText.textContent=item.common_name;
        cardText.classList.add('card-text');
        divCardBody.appendChild(cardText);
        divCard.appendChild(divCardBody);
      });
    });
});