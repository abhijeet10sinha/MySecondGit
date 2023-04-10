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

        // Created list item element
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));

        // Created delete button element
        const deletBtn = document.createElement('li');
        deletBtn.classList.add('delete-btn');
        deletBtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(deletBtn);

        // Created edit button element
        const editBtn = document.createElement('li');
        editBtn.classList.add('edit-btn');
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editBtn);

        // Add list item to the user list
        userList.appendChild(li);

        // Clear input fields
        nameInput.value = '';
        emailInput.value = '';


        // Add event listner to the delete button
        deletBtn.addEventListener('click', ()=>{
            localStorage.removeItem(userId);
            li.remove();
        })

        // Add event listner to the edit button
        editBtn.addEventListener('click', ()=>{
            // Retrieve user data from local storage
            const userData = JSON.parse(localStorage.getItem(userId));
            
            // Remove the list item from the user list
            li.remove();

            //
            nameInput.value = userData.name;
            emailInput.value = userData.email;

            localStorage.removeItem(userId);
        })
    }
}