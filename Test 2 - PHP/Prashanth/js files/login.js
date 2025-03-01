if(localStorage.getItem("token")){
  location.href = "./userDashboard.html";
}

let params = new URLSearchParams(location.search);
if(params.get("error")) {
  alert(params.get("error"));
  window.history.replaceState(null,"",window.location.pathname);
}

function login(){
  let email = $("#email").val();
  let password = $("#password").val();

  if (email.trim() === "") {
      alert("Email cannot be empty");
      return false;
  }
  if (password.trim() === "") {
      alert("Password cannot be empty");
      return false;
  }
  
  $.ajax({
      url: "http://localhost/test%202/api/login.php",
      method: "POST",
      data: {
          email,
          password,
      },
      success: (response) => {
          response = JSON.parse(response);
          if(!response.status){
              alert(response.message);
              return false;
          }
          localStorage.setItem("token", response.data.token);
          location.href = "./userDashboard.html";
      },
      error: (response) => {
          console.log(response);
      },
  });
}