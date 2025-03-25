function registerUser(username, email, password) {
    
    for (let i = 0; i < localStorage.length; i++) {
        const storedUsername = localStorage.key(i);
        const storedData = JSON.parse(localStorage.getItem(storedUsername));

        if (storedData && storedData.email === email) {
            alert("Email already exists. Please use another email.");
            return;
        }
    }


    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another one.");
        return;
    }

   
    const userData = { email, password };
    localStorage.setItem(username, JSON.stringify(userData));

    alert("Registration successful! You can now log in.");
    window.location.href = "Login_page.html"; 
}


function auth(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var userData = localStorage.getItem(username);
    if (userData) {
        var storedData = JSON.parse(userData);
        
       
        if (storedData.password === password) {
            alert("Login successful!");
            sessionStorage.setItem("loggedInUser", username); 
            window.location.href = "home.html"; 
        } else {
            alert("Invalid username or password.");
        }
    } else {
        alert("User not found. Please register first.");
    }


    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


function showEyeIcon() {
    document.getElementById("togglePassword").style.display = "block";
}


function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleIcon = document.getElementById("togglePassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("registerUsername").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            registerUser(username, email, password);
        });
    }

    
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", auth);
    }
});
