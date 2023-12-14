if(localStorage.getItem("token")){
    location.href = './login.html';
}
function register(){
    
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let userRole = $("#userRole").val();

    if (name.trim() === "") {
        alert("Name cannot be empty");
        return false;
    }
    if (email.trim() === "") {
        alert("Email cannot be empty");
        return false;
    }
    if (password.trim() === "") {
        alert("Password cannot be empty");
        return false;
    }

    $.ajax({
        url: "http://localhost/test%202/api/index.php",
        method: "POST",
        data: {
            
            name,
            email,
            password,
            userRole,
        },
        success: (response) => {
            response = JSON.parse(response);
            if(!response.status){
                alert(response.message);
                return false;
            }
            location.href = "./login.html";
        },
        error: (response) => {
            console.log(response);
        },
    });
}