const get = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('get', url);

    xhr.onload = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      }
    };

    xhr.onerror = function () {
      reject(new Error(xhr.statusText));
    };

    xhr.send();
  })
};

get('data.json')
  .then(response => {
    console.log(response);
    const text = JSON.parse(response);
    const h1 = document.createElement('h1');
    h1.innerHTML = `${text.name} is ${text.age} years old this year.`;
    document.body.appendChild(h1);
  })
  .catch(error => console.error('Failed ', error));