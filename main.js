const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter the correct inputs';

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const user = {
            name: nameInput.value,
            email: emailInput.value
        };
        
        // Generate a unique ID for the user
        const userId = emailInput.value.toLowerCase();

        // Store the user data in local storage using the unique ID as the key
        localStorage.setItem(userId, JSON.stringify(user));

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}

window.onload = function(){
    localStorage.removeItem('users');
    //checking for local storage support.
    if(localStorage){

        //Add an event listener for form submission
        document.getElementById('my-form').addEventListener('submit', function(){

            //get the value of the name field
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;

            //Save the name and email in local storage
            const user = {
                name: name,
                email: email
            };
            
            // Generate a unique ID for the user
            const userId = email.toLowerCase();

            // Storing the data in the UI
            const li = document.createElement('li');
        })
    }
}
