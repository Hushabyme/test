const userArr = {};

fetch('data.json')
    .then(response =>  response.json())
    .then((user) => {
      userArr.age = user.age;
      userArr.name = user.name;
    })
  .then(() => {
    const h1 = document.createElement('h1');
    h1.innerHTML = `${userArr.name} is ${userArr.age} years old this year`;
    document.body.appendChild(h1);
  });

console.log(userArr);