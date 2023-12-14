//form fields
const email = document.getElementById("email");
//emails Errors
    const emailError = document.getElementById("emailError");
//email patterns
    const emailPattern= /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    email.addEventListener('change',()=>{
        if(!emailPattern.test(email.value)){
            email.classList.add("is-invalid");
            emailError.innerHTML='Enter your email address correctly';
            emailError.style.color = "red";
            emailError.style.border = "red";
        }
        else{
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }
    });
//form fields
const password = document.getElementById("password");
//Password Errors
    const passwordError = document.getElementById("passwordError");
//patterns
    const passwordPattern=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/;

    password.addEventListener('change',()=>{
        if(!passwordPattern.test(password.value)){
            password.classList.add("is-invalid");
            passwordError.innerHTML='please give correct password';
            passwordError.style.color = "red";
            passwordError.style.border = "red";
        }
        else{
            password.classList.remove("is-invalid");
            password.classList.add("is-valid");
        }
    });