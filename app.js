let div = document.getElementById("main");

function showSignUp() {
    div.innerHTML = `
        <h1>Sign Up</h1>
        <p>UserName</p>
        <input type="text" name="" id="name">
        <p>Email</p>
        <input type="email" name="" id="mail">
        <p>Password</p>
        <input type="password" name="" id="pass">
        <br><br>
        <button id="in">Sign In</button>
        <button id="correct">Sign up</button>
    `;
    
    document.getElementById("in").addEventListener("click", showSignIn);
    document.getElementById("correct").addEventListener('click', () => {
        let UserName = document.getElementById('name').value;
        let UserEmail = document.getElementById('mail').value;
        let UserPass = document.getElementById('pass').value;
       
        document.getElementById('name').value = ""
        document.getElementById('mail').value = ""
        document.getElementById('pass').value = ""
        
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
        <h1>Sign In</h1>
        <p>Email</p>
        <input type="email" name="" id="mail">
        <p>Password</p>
        <input type="password" name="" id="pass">
        <br><br>
        <button id="dash">Sign In</button>
        <button id="up">Sign up</button>
    `;
    
    document.getElementById("up").addEventListener("click", showSignUp);
    document.getElementById("dash").addEventListener("click", site);
}

function site() {
    let loginMail = document.getElementById("mail").value;
    let loginPass = document.getElementById("pass").value;
    let flag = false
    if (localStorage.getItem('mail') === loginMail && localStorage.getItem('pass') === loginPass) {
        console.log('You successfully logged in');
        window.location.href = "dashBoard.html";
        flag = true
        loginMail.value = ''
        loginPass.value = ''
        } else {
            alert("not logged");
            flag = false
            loginMail.value = ''
            loginPass.value = ''
    }
    if (flag == true) {
        window.location.href = 'dashBoard.html'
    }
}
document.getElementById("up").addEventListener("click", showSignUp);
