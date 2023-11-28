if(localStorage.getItem("token")){
    location.href = './login.html';
}
function register(){
    let user_name = $("#user_name").val();
    let email = $("#email").val();
    let password = $("#password").val();

    $.ajax({
        url: "./api/index.php",
        method: "POST",
        data: {
            user_name,
            email,
            password,
        },
        success: (response) => {
            response = JSON.parse(response);
            if(!response.status){
                alert(response.message);
                return false;
            }
            location.href = "./dashboard.html";
        },
        error: (response) => {
            console.log(response);
        },
    });
}