

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

    let span = document.getElementById('span').innerText = createName
});

let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form from submitting
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    if (mail === localStorage.getItem('mail') && pass === localStorage.getItem('pass')) {
        localStorage.setItem('tr', 'true'); 
        window.location.href = 'main.html';
        mail.value = ''
        pass.value = ''
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or Password is wrong",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
         document.getElementById('email').value = '';
        document.getElementById('pass').value = ''
    }
});


 
