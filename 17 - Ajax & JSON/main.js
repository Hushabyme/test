const btn = document.querySelector('#btn');
let pageCount = 1;

function fetch() {
  const request = new XMLHttpRequest();
  request.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCount}.json`);

  request.onload = function () {
    const data = JSON.parse(request.responseText);
    // console.log(data[0]);
    renderHTML('#animal-info', data);
  };

  request.onerror = function () {
    console.log('cannot find this file.');
  };

  request.send();
  pageCount++;
  // console.log(pageCount)

  if(pageCount >= 4) {
    btn.classList.add('hide-btn');
  }
}

function renderHTML(id, data) {
  const container = document.querySelector(id);

  let html = '';

  for(let i = 0; i < data.length; i++) {
    html += `<p>${data[i].name} is a ${data[i].species} that likes to eat `;

    for(let j = 0, k = 0; j < data[i].foods.likes.length, j < data[i].foods.dislikes.length; j++, k++) {
      html += `${data[i].foods.likes[j]} and dislikes to eat ${data[i].foods.dislikes[k]}`
    }

    html += '</p>'
  }
  container.insertAdjacentHTML('beforeend', html);

}



btn.addEventListener('click', fetch);