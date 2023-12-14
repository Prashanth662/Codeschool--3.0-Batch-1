
$.ajax({
    url: "http://localhost/test%202/api/dashboard.php",
    method: "GET",
    success: function(data) {
      // Process the retrieved data
      console.log(data);
    
      let dataHtml = "";
      for (let i = 0; i < data.length; i++) {
        let product = data[i];
        dataHtml += `<tr>
        <td><img src='${product.image}' alt="product img" width="50px" height="50px"></td>
        </tr>
        <tr><td><p class="me-auto">${product.date}</p></td>
        </tr>
        <tr><td><h3>${product.title}</h3></td>
        </tr>
        <tr><td><a href="" class="text-decoration-none" id="description">${product.description}</a></td>
        </tr>`;
      }
        
      $("#row").html(dataHtml);
    },
    error: function(response) {
      console.error("Error fetching data:", response);
    }
  });
    