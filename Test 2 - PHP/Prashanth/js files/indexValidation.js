//form fields
const fullName = document.getElementById("name");
//Name Errors
    const fullNameError = document.getElementById("nameError");
//Name patterns
    const userPattern=/^[A-Za-z]{5,15}$/;

    fullName.addEventListener('change',()=>{
        if(!userPattern.test(name.value)){
            name.classList.add("is-invalid");
            fullNameError.innerHTML='Invalid Username';
            fullNameError.style.color = "red";
            fullNameError.style.border = "red";
        }
        else{
            fullNameError.innerHTML='';
        }
    });


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
            emailError.innerHTML='';
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
            passwordError.innerHTML='';
        }
    });

    function validateInputSelection(option, feedback){
        // On Change Remove Invalid Class.
        option.on("change", function(){
            option.removeClass("is-invalid");
        });
        // Validating Conditions.
        if(option.val() == null){
            option.addClass("is-invalid");
            alert("Please select input!");
            return false;
        } else {
            option.removeClass("is-invalid");
            return true;
        }
    }