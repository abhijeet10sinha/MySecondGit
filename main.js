const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Check for existing data in local storage
let userData = localStorage.getItem('userData');
if (userData === null) {
  // If no existing data, initialize userData as an empty array
  userData = [];
} else {
  // If existing data, parse the JSON string into a JavaScript object
  userData = JSON.parse(userData);
}

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter the correct inputs';

    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create a new user object with name and email properties
    const newUser = {
      name: nameInput.value,
      email: emailInput.value
    };

    // Add the new user object to the userData array
    userData.push(newUser);

    // Store the updated userData array in local storage as a JSON string
    localStorage.setItem('userData', JSON.stringify(userData));

    // Add the new user to the user list
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${newUser.name} : ${newUser.email}`));
    userList.appendChild(li);

    // Clear the form inputs
    nameInput.value = '';
    emailInput.value = '';
  }
}
