
$.ajax({
    url: "./api/profile.php",
    method: "GET", // Specify the HTTP method
    dataType: "json", // Expect JSON data in the response
    success: function(data) {
      // Process the retrieved data
      console.log(data);
  
      user_name = document.getElementById('name');
      email = document.getElementById('email');
      user_name = ${data.user_name};
      email = ${}
    },
    error: function(response) {
      console.error("Error fetching data:", response);
    }
  });