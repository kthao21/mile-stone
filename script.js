const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
// const login = document.querySelector('.form-box.login');
// const register = document.querySelector('.form-box.register');

document.querySelector('.form-box.login').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    console.log('Username and password saved to local storage.');

});


//adds the 'active' class so we can toggle Login and Registration forms on the main page
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    console.log('listening');
    wrapper.classList.add('active-popup');
});

localStorage.setItem('username', 'JohnDoe');

let username = localStorage.getItem('username');
console.log(username);