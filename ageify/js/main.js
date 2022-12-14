const SERVER_URL = 'https://api.agify.io?name=';
const output = document.querySelector('#output');
const form = document.querySelector('form');
const input = document.querySelector('#name-input');
const button = document.querySelector('#submit-bttn');
const errEl = document.querySelector('#error-el');
const results = [];

const getAge = (uName) => {
  console.log(SERVER_URL + uName.toLowerCase().trim());
   return fetch(SERVER_URL + uName)
     .then((response) => response.json())
     .catch((error) => {
       console.log('Error', error);
     });
};

const populateResultsArr = (data) => {
  if (data.age !== null) {
    const uName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    results.unshift(
      `The average age for someone named ${uName} is ${data.age}.`
    );
    errEl.textContent = '';
  } else {
    errEl.textContent = 'There are no recorded ages for this name.';
  }

  return results;
};

const displayAge = (results = []) => {
  output.innerHTML = '';
  return results.forEach((r) => {
    const li = document.createElement('li');
    li.textContent = r;
    output.append(li);
  });
};

const confirmInput = (value) => {
  const pattern = /[\W\d\s]/;
  if (!pattern.test(value)) {
    errEl.textContent = '';
    return value;
  } else {
    return '';
  }
};

button.addEventListener('click', (e) => {
  const uName = confirmInput(input.value.toLowerCase().trim());
  input.value = '';
  getAge(uName).then(populateResultsArr).then(displayAge);
  e.preventDefault();
});
