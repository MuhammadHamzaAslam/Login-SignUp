// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });


// let signUpBtn = document.querySelector('.btn')

// signUpBtn.addEventListener('click',()=>{
//     let createName = document.getElementById('createName').value
//     let createEmail = document.getElementById('createEmail').value
//     let createPass = document.getElementById('createPass').value
    
//     localStorage.setItem('mail',createEmail)
//     localStorage.setItem('name',createName)
//     localStorage.setItem('pass',createPass)
//     localStorage.setItem('tr',true)
//     window.location.href = 'index.html'
// })

// let loginBtn = document.querySelector('.loginBtn')
// loginBtn.addEventListener('click',()=>{
//     let mail = document.getElementById('email').value
//     let pass = document.getElementById('pass').value
//     if (mail == localStorage.getItem('mail') && pass == localStorage.getItem('pass')){
//         window.location.href = 'main.html'
//         alert('You Logged')
//     }
//     else{
//         alert('No Logged')
//     }
// })


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

let signUpBtn = document.querySelector('.btn');

signUpBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form from submitting
    let createName = document.getElementById('createName').value;
    let createEmail = document.getElementById('createEmail').value;
    let createPass = document.getElementById('createPass').value;

    localStorage.setItem('mail', createEmail);
    localStorage.setItem('name', createName);
    localStorage.setItem('pass', createPass);
    // Setting logged-in status to true after sign up
    localStorage.setItem('tr', 'true');
    window.location.href = 'index.html';
});

let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form from submitting
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    if (mail === localStorage.getItem('mail') && pass === localStorage.getItem('pass')) {
        localStorage.setItem('tr', 'true'); // Set login status to true
        window.location.href = 'main.html';
    } else {
        alert('No Logged');
    }
});



