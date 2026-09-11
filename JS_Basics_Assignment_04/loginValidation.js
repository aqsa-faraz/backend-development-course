let username = "aqsa";
let password = "12345678";

// let user = "Aqsa";
// let pwd = "123458";

const user = document.getElementById("username");
const pwd = document.getElementById("password");
const submit_btn = document.getElementById("submit");

// adding a click listener to the button
submit_btn.addEventListener('click', () => {
    
    // If both username and password match 
    if (username == user.value && password === pwd.value) {
        alert("Login Successful");
        console.log("Login Successful\nusername: "+user.value+" , password: "+pwd.value);
    } else {
        console.log("Invalid Username or Password");
        alert("Invalid Username or Password");
    }

});

