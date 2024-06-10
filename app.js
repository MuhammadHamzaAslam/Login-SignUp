let div = document.getElementById("main");

function showSignUp() {
    div.innerHTML = `
        <img src="img/instagram.webp" style="height: 120px;width: 200px;" alt="">
        <input type="text" placeholder="Enter UserName" id="name" class="inputField">
        <br>
        <input type="email" placeholder="Email address" id="mail" class="inputField">
        <br>
        <input type="password" placeholder="Enter Password" id="pass" class="inputField">
        <br>
        <button id="in" class="dash">Sign In</button>
        <button id="correct" class="dash">Sign up</button>
    `;
    
    document.getElementById("in").addEventListener("click", showSignIn);
    document.getElementById("correct").addEventListener('click', () => {
        let UserName = document.getElementById('name').value;
        let UserEmail = document.getElementById('mail').value;
        let UserPass = document.getElementById('pass').value;
       
        document.getElementById('name').value = "";
        document.getElementById('mail').value = "";
        document.getElementById('pass').value = "";
        
        localStorage.setItem('name', UserName);
        localStorage.setItem('mail', UserEmail);
        localStorage.setItem('pass', UserPass);
        console.log("UserName: " + UserName);
        console.log("UserEmail: " + UserEmail);
        console.log("UserPass: " + UserPass);
    });
}

function showSignIn() {
    div.innerHTML = `
        <img src="img/instagram.webp" style="height: 120px;width: 200px;" alt="">
        <input type="email" placeholder="Email address" id="mail" class="inputField">
        <br>
        <input type="password" placeholder="Enter Password" id="pass" class="inputField">
        <br>
        <button id="dash" class="dash">Sign In</button>
        <button id="up" class="dash">Sign up</button>
    `;
    
    document.getElementById("up").addEventListener("click", showSignUp);
    document.getElementById("dash").addEventListener("click", site);
}

function site() {
    let loginMail = document.getElementById("mail").value;
    let loginPass = document.getElementById("pass").value;
    let flag = false;
    if (localStorage.getItem('mail') === loginMail && localStorage.getItem('pass') === loginPass) {
        console.log('You successfully logged in');
        flag = true;
    } else {
        alert("not logged");
        flag = false;
    }
    if (flag) {
        window.location.href = 'dashBoard.html';
    }
}

document.getElementById("up").addEventListener("click", showSignUp);
