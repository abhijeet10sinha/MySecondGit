// const ul = document.querySelector('.items');

// let c = ul.firstElementChild.textContent = 'HELLO';
// console.log(ul.firstElementChild.style.color = 'green');
// console.log(ul.children[1].style.color = 'yellow');

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
// })

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'cyan';
// })

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'pink';
// })


//grabbing the bunch of doms and put them into variables.

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
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}

window.onload = function(){
    //checking for local storage support.
    if(localStorage){
        //Add an event listner for form submission
        document.getElementById('my-form').addEventListener('submit', function(){
            //get the value of the name field
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;

            //Save the name and email in local storage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
        })
    }
}